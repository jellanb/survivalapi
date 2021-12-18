import getLastUniqueKill from '../../domain/usecase/get-last-unique-kill';
import KillUniqueRepository from '../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository';
import UserRepository from '../../infrastructure/persistence/repositories/shard/UserRepository';
import CharRepository from "../../infrastructure/persistence/repositories/shard/_ShardRepository";


export default async function lastUniqueKillController(){
    try {
        const lastKillResult = await getLastUniqueKill(await KillUniqueRepository(), await UserRepository(), await CharRepository());
        return lastKillResult
    } catch (error) {
        console.log(error)
    }
}
