import { GuildRepository } from '../../infrastructure/persistence/repositories/shard/GuildRepository'
import { SiegeFortressRepository } from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository'

export default async function getGuildNameOccupiedFortress(guild: GuildRepository, siegeFortress: SiegeFortressRepository){
    const fortressInfo = []
    const fortressNames = await siegeFortress.getAllGuildOccupiedFortress();
    if (!fortressNames) {
        throw Error('guilds not founds')
    }
    for await (const fortressName  of fortressNames){
        const guildId = fortressName.getDataValue('GuildID');
        const guildName = await guild.getGuildOccupiedFortressByIds(guildId)
        fortressInfo.push({
            fortressName: await detectFortressName(fortressName.getDataValue('FortressID')),
            guildName: guildName?.getDataValue('Name')
        })
    }

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

    return fortressInfo
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
