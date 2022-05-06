import RollbackSilkAccount from "../../domain/usecase/rollback-silk-account";
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SilkRepository from '../../infrastructure/persistence/repositories/shard/SilkRepository';

export const rollbackSilkAccountController = async (username: string, silkRollBack: number ) => {
    return await RollbackSilkAccount(username, silkRollBack, UserRepository, SilkRepository)
}