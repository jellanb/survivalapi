import { OnlinePlayers } from '../../entities/vplus/_OnlinePlayers';

export interface OnlinePlayersRepository {
    getQuantityUsersOn: () => Promise<number>,
    getPlayersNamesOnline: () => Promise<OnlinePlayers[] | undefined>
}
export function OnlinePlayersRepository(): OnlinePlayersRepository {
    return {
        getQuantityUsersOn: async () => await OnlinePlayers.count(),
        getPlayersNamesOnline: async () => {
            try{
                const result = await OnlinePlayers.findAll({
                    attributes: ['CharName16']
                });
                return result;
            } catch (e) {
                console.log(e);
            }
        }
    }
}

export default OnlinePlayersRepository();
