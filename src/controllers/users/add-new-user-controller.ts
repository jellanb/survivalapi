import createNewUser from '../../domain/usecase/create-new-user';
import { UserResult, UsersDetails } from '../../interfaces/usersInterface';
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SurvivalLogger from '../../infrastructure/observability/logging/logger';
import Net2eRepository from '../../infrastructure/persistence/repositories/shard/Net2eRepository';


export const addNewUserController = async (userDetails: UsersDetails): Promise<UserResult> => {
    try {
        return await createNewUser(userDetails, UserRepository, Net2eRepository);
    } catch (error) {
        let errorMessage: string = '';
        if (error instanceof Error) {
            errorMessage = error.message
            SurvivalLogger.error(`[ERROR] Cannot add new user, ${error.message}`);
        }
        return {
            username: undefined,
            password: undefined,
            email: undefined,
            errorDescription: errorMessage
        }
    }
}
