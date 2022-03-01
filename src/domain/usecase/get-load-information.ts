import { UserRepository } from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import {OnlinePlayersRepository} from '../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository';
import { KillUniqueRepository } from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import { UserShardRepository } from '../../infrastructure/persistence/repositories/shard/UserRepository';
import { CharRepository } from '../../infrastructure/persistence/repositories/shard/_ShardRepository';
import { GuildRepository }  from '../../infrastructure/persistence/repositories/shard/GuildRepository';
import { SiegeFortressRepository } from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

export async function getLoadInformation(
    userRepository: UserRepository,
    onlinePlayersRepository: OnlinePlayersRepository,
    uniqueKillRepository: KillUniqueRepository,
    userShardRepository: UserShardRepository,
    charRepository: CharRepository,
    guildRepository: GuildRepository,
    siegeFortressRepository: SiegeFortressRepository
){
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

    return {
        usersOnline: usersQuantityOnline,
        usernameLastUniqueKill: username[0],
        fortressInfo: fortressInfo
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
