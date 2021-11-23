import getLastUniqueKill from '../../domain/usecase/get-last-unique-kill';
import KillUniqueRepository from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import UserRepository from '../../infrastructure/persistence/repositories/shard/UserRepository';
import AccountRepository from "../../infrastructure/persistence/repositories/shard/AccountJidRepository";


export default async function lastUniqueKillController(){
    try {
        const lastKillResult = await getLastUniqueKill(await KillUniqueRepository(), await UserRepository(), await AccountRepository());
        return lastKillResult
    } catch (error) {
        console.log(error)
    }
}
