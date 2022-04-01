import { OnlinePlayersRepository } from '../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository';


export default function getOnlinePlayes( onlinePlayersRepository: OnlinePlayersRepository) {
    return onlinePlayersRepository.getQuantityUsersOn();
}
