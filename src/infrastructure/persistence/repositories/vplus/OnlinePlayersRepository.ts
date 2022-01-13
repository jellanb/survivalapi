import { OnlinePlayers } from '../../entities/vplus/_OnlinePlayers'

export interface OnlinePlayersRepository {
    getQuantityUsersOn: () => Promise<Number>;
}

export default async function onlinePlayersRepository(): Promise<OnlinePlayersRepository> {
    return {
        getQuantityUsersOn: async () => await OnlinePlayers.count()
    }
}
