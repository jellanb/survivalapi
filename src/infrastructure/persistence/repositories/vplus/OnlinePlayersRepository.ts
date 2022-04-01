import { OnlinePlayers } from '../../entities/vplus/_OnlinePlayers'

export interface OnlinePlayersRepository {
    getQuantityUsersOn: () => Promise<Number>;
}

export default async function OnlinePlayersRepository(): Promise<OnlinePlayersRepository> {
    return {
        getQuantityUsersOn: async () => await OnlinePlayers.count()
    }
}
