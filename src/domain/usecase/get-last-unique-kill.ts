import { KillUniqueRepository } from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import { UserRepository } from '../../infrastructure/persistence/repositories/shard/UserRepository';
import { AccountRepository } from "../../infrastructure/persistence/repositories/shard/AccountJidRepository";


export default async function getLastUniqueKill(uniqueKillRepository: KillUniqueRepository, userRepository: UserRepository, accountRepository: AccountRepository) {
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId')
    const userId = await userRepository.findUserById(charId)
    if (!userId) return
    const username = await accountRepository.findAccountById(userId[0].getDataValue('UserJID'))
    return username
}

