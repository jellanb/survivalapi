import KillUniqueRepository from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import CharRepository from '../../infrastructure/persistence/repositories/shard/_ShardRepository';
import GuildRepository  from '../../infrastructure/persistence/repositories/shard/GuildRepository';
import SiegeFortressRepository from '../../infrastructure/persistence/repositories/shard/SiegeFortressRepository';
import { getLoadInformation } from '../../domain/usecase/get-load-information';
import OnlinePlayersRepository from '../../infrastructure/persistence/repositories/shard/OnlinePlayersRepository';
import { handlerMetrics } from '../../infrastructure/metrics';
import _ScheduleRepository from '../../infrastructure/persistence/repositories/shard/_ScheduleRepository';
import SystemRepository from '../../infrastructure/persistence/repositories/system/systemRepository';

export function getLoadInformationController() {
        return getLoadInformation(
            OnlinePlayersRepository,
            KillUniqueRepository,
            CharRepository,
            GuildRepository,
            SiegeFortressRepository,
            _ScheduleRepository,
            handlerMetrics,
            SystemRepository
        );
}

