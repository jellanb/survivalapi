import {OnlinePlayersRepository} from '../../infrastructure/persistence/repositories/shard/OnlinePlayersRepository';
import { KillUniqueRepository } from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import { CharRepository } from '../../infrastructure/persistence/repositories/shard/_ShardRepository';
import { GuildRepository }  from '../../infrastructure/persistence/repositories/shard/GuildRepository';
import { SiegeFortressRepository } from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository';
import log from '../../infrastructure/observability/logging/logger';
import { MetricsClient } from '../../infrastructure/metrics/prometheus-client';
import { METRICS_TO_COLLECT } from '../../infrastructure/metrics/metric-collect';
import {_ScheduleRepository} from '../../infrastructure/persistence/repositories/shard/_ScheduleRepository';
import { SystemRepository } from '../../infrastructure/persistence/repositories/system/systemRepository';
import { RefObjCommonRepository } from '../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository';

export async function getLoadInformation(
    onlinePlayersRepository: OnlinePlayersRepository,
    uniqueKillRepository: KillUniqueRepository,
    charRepository: CharRepository,
    guildRepository: GuildRepository,
    siegeFortressRepository: SiegeFortressRepository,
    scheduleRepository: _ScheduleRepository,
    handlerMetrics: MetricsClient,
    systemRepository: SystemRepository,
    refObjCommonRepository: RefObjCommonRepository
){
    const { userVisitWebSite } = METRICS_TO_COLLECT;
    const uniquesID = [
        1954,
        5871,
        1982,
        14936,
        2002,
        3810,
        3875,
        //41418,//juno
        //41419,//jupiter
        //41417,//earth
        //41421,//zielksa
        //41423//baal
    ];
    let charIDLastUniqueKill = [];
    log.info('Init load information to load web site');
    log.info('Getting amount user online');
    const usersQuantityOnline = await onlinePlayersRepository.getQuantityUsersOn();
    const onlinePlayersNames = await onlinePlayersRepository.getPlayersNamesOnline();
    log.info(`Finish get amount user online with amount:${usersQuantityOnline}`);

    log.info('Finding username last unique kill');
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId')
    if (!charId) return
    const username = await charRepository.findCharById(charId)
    if (!username) return
    log.info(`Finish username last unique kill with username: ${username[0].getDataValue('CharName16')}`);

    log.info('Finding last unique kill list');
    for await (const uniqueID of uniquesID) {
        const uniqueKill = await uniqueKillRepository.findUniqueKillInfoByUniqueId(uniqueID);
        if (!uniqueKill) continue;
        const char = await charRepository.findCharById(uniqueKill!.getDataValue('charId'));
        const username = char
        const monsterId = uniqueKill!.getDataValue('monsterId');
        const refObjCommon = await refObjCommonRepository.findById(monsterId);
        const monsterName = refObjCommon?.getDataValue('name_object');
        const id = uniqueKill!.getDataValue('id');
        const killDate = uniqueKill!.getDataValue('killData');
        const apearedTime = uniqueKill.getDataValue('apearedTime');
        const isDeath = uniqueKill!.getDataValue('isDeath');
        if (uniqueKill) {
            charIDLastUniqueKill.push({
                id,
                charName:username![0],
                monsterName,
                killDate,
                apearedTime,
                isDeath
            }) 
        }
    }
    log.info('Finish last unique kill list');

    log.info(`Init guilds name occupied fortress`);
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
        log.info(`Guilds name occupied fortress found with name: ${guildName?.getDataValue('Name')}`);
    }
    log.info(`Finish find guilds name occupied fortress`);

    const scheduleCaptureFlag = await scheduleRepository.findById(12);
    const currentTime = new Date()
    const arr = scheduleCaptureFlag.map((schedule) => schedule.getDataValue('SubInterval_StartTimeHour'))
    const goal = currentTime.getHours();
    const nextCaptureFlagTime = arr.reduce((prev, curr) => {
        return (Math.round(curr - goal) < Math.round(prev - goal) ? curr : prev);
    });

    const serverTime = await systemRepository.getSystemTime()

    if (fortressInfo.length === 0){
        fortressInfo.push({
            fortressName: 'JG Fortress:',
            guildName: 'Not Occupied'
        })
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
        usersOnline: usersQuantityOnline ?? 0,
        usernameLastUniqueKill: username[0],
        fortressInfo: fortressInfo,
        nextCaptureFlagTime: nextCaptureFlagTime ?? 0,
        serverTime: serverTime,
        onlinePlayersNames : onlinePlayersNames?.map((onlinePlayer) => onlinePlayer.getDataValue('CharName16')),
        lastKillByUserName: charIDLastUniqueKill
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
