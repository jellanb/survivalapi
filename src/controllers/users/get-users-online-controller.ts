import getOnlinePlayers from '../../domain/usecase/get-online-playes'
import OnlinePlayersRepository from '../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository'


export default async function getUsersOnlineController() {
    try {
        return await getOnlinePlayers(await OnlinePlayersRepository());
    } catch (failure) {
        console.log(failure)
    }
}
