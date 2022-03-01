import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import KillUniqueRepository from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import UserShardRepository from '../../infrastructure/persistence/repositories/shard/UserRepository';
import CharRepository from '../../infrastructure/persistence/repositories/shard/_ShardRepository';
import GuildRepository  from '../../infrastructure/persistence/repositories/shard/GuildRepository';
import SiegeFortressRepository from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository';
import { getLoadInformation } from '../../domain/usecase/get-load-information';
import OnlinePlayersRepository from '../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository';

export function getLoadInformationController() {
        return getLoadInformation(
            UserRepository,
            OnlinePlayersRepository,
            KillUniqueRepository,
            UserShardRepository,
            CharRepository,
            GuildRepository,
            SiegeFortressRepository
        );
}

