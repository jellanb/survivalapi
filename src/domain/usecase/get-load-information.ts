import {OnlinePlayersRepository} from '../../infrastructure/persistence/repositories/shard/OnlinePlayersRepository';
import { KillUniqueRepository } from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import { CharRepository } from '../../infrastructure/persistence/repositories/shard/_ShardRepository';
import { GuildRepository }  from '../../infrastructure/persistence/repositories/shard/GuildRepository';
import { SiegeFortressRepository } from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository';
import SurvivalLogger from '../../infrastructure/observability/logging/logger';
import { MetricsClient } from '../../infrastructure/metrics/prometheus-client';
import { METRICS_TO_COLLECT } from '../../infrastructure/metrics/metric-collect';
import {_ScheduleRepository} from '../../infrastructure/persistence/repositories/shard/_ScheduleRepository';
import { getSystemTime } from '../../infrastructure/persistence/connectionManager/moduleConnections';
import { SystemRepository } from '../../infrastructure/persistence/repositories/system/systemRepository';

export async function getLoadInformation(
    onlinePlayersRepository: OnlinePlayersRepository,
    uniqueKillRepository: KillUniqueRepository,
    charRepository: CharRepository,
    guildRepository: GuildRepository,
    siegeFortressRepository: SiegeFortressRepository,
    scheduleRepository: _ScheduleRepository,
    handlerMetrics: MetricsClient,
    systemRepository: SystemRepository
){
    const { userVisitWebSite } = METRICS_TO_COLLECT;
    SurvivalLogger.info('Init load information to load web site');
    SurvivalLogger.info('Getting amount user online');
    const usersQuantityOnline = await onlinePlayersRepository.getQuantityUsersOn();
    SurvivalLogger.info(`Finish get amount user online with amount:${usersQuantityOnline}`);

    SurvivalLogger.info('Finding username last unique kill');
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId')
    if (!charId) return
    const username = await charRepository.findCharById(charId)
    if (!username) return
    SurvivalLogger.info(`Finish username last unique kill with username: ${username[0].getDataValue('CharName16')}`);

    SurvivalLogger.info(`Init guilds name occupied fortress`);
    const fortressInfo = []
    const fortressNames = await siegeFortressRepository.getAllGuildOccupiedFortress();
    if (!fortressNames) {
        throw Error('guilds not founds')
    }
    for await (const fortressName  of fortressNames){
        const guildId = fortressName.getDataValue('GuildID');
        const guildName = await guildRepository.getGuildOccupiedFortressByIds(guildId)
        fortressInfo.push({
            fortressName: await detectFortressName(fortressName.getDataValue('FortressID')),
            guildName: guildName?.getDataValue('Name')
        })
        SurvivalLogger.info(`Guilds name occupied fortress found with name: ${guildName?.getDataValue('Name')}`);
    }
    SurvivalLogger.info(`Finish find guilds name occupied fortress`);

    const scheduleCaptureFlag = await scheduleRepository.findById(12);
    const currentTime = new Date()
    console.log(scheduleCaptureFlag.map((schedule) => schedule.getDataValue('SubInterval_StartTimeHour')))

    const arr = scheduleCaptureFlag.map((schedule) => schedule.getDataValue('SubInterval_StartTimeHour'))
    const goal = currentTime.getHours()
    console.log(goal)
    const nextCaptureFlagTime = arr.reduce((prev, curr) => {
        return (Math.round(curr - goal) < Math.round(prev - goal) ? curr : prev);
    });

    const serverTime = await systemRepository.getSystemTime()

    if (fortressInfo.length === 0){
        return [
            {
                fortressName: 'JG Fortress:',
                guildName: 'Not Occupied'
            }
        ]
    }

    if (!fortressInfo.find((ftwInfo) => ftwInfo.fortressName === 'JG Fortress:')){
        fortressInfo.push({
            fortressName: 'JG Fortress:',
            guildName: 'Not Occupied'
        })
    }

    if (!fortressInfo.find((ftwInfo) => ftwInfo.fortressName === 'HT: Fortress:')){
        fortressInfo.push({
            fortressName: 'HT: Fortress:',
            guildName: 'Not Occupied'
        })
    }

    const labelValues = {
        web_site: 1,
        payment: 0,
        document_type: 0,
        error_code: '',
        source: '',
    }
    handlerMetrics.incrementMetric({
        metricName: userVisitWebSite.name,
        labelValues,
        incrementValue: 1
    })

    return {
        usersOnline: usersQuantityOnline,
        usernameLastUniqueKill: username[0],
        fortressInfo: fortressInfo,
        nextCaptureFlagTime: nextCaptureFlagTime,
        serverTime: serverTime
    }
}

async function detectFortressName(id: number){
    switch (id) {
        case id = 1 :{
            return 'JG Fortress:'
        }
        case id = 3 :{
            return 'BD: Fortress:'
        }
        case id = 6:{
            return 'HT: Fortress:'
        }
        default: {
            return 'Not Occupied'
        }
    }
}
