import { OnlinePlayers } from '../../entities/vplus/_OnlinePlayers';

export interface OnlinePlayersRepository {
    getQuantityUsersOn: () => Promise<number>
}
export function OnlinePlayersRepository(): OnlinePlayersRepository {
    return {
        getQuantityUsersOn: async () => await OnlinePlayers.count()
    }
}

export default OnlinePlayersRepository();
