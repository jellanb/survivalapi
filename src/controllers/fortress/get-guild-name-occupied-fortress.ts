import GuildNameOccupiedFortressWar from '../../domain/usecase/get-guild-name-occupied-fortress'
import { GuildRepository } from '../../infrastructure/persistence/repositories/shard/GuildRepository'
import { SiegeFortressRepository } from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository'

export const getGuildNameOccupiedFortressController = async () => {
    try {
        return await GuildNameOccupiedFortressWar(await GuildRepository(),await SiegeFortressRepository())
    } catch (failure) {
        console.log(failure);
    }
}
