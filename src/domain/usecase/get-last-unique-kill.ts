import { KillUniqueRepository } from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import { UserRepository } from '../../infrastructure/persistence/repositories/shard/UserRepository';
import { CharRepository } from "../../infrastructure/persistence/repositories/shard/_ShardRepository";


export default async function getLastUniqueKill(uniqueKillRepository: KillUniqueRepository, userRepository: UserRepository, charRepository: CharRepository) {
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId')
    if (!charId) return
    const username = await charRepository.findCharById(charId)
    if (!username) return
    return username[0]
}

