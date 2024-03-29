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
        const errorDetails = {
            error: true,
            username: undefined,
            password: undefined,
            email: undefined,
            errorDescription: errorMessage
        }
        switch (error.message) {
            case 'USER_ALREADY_EXIST':
                errorDetails.errorDescription = 'Error: User already exist!';
                break;
            case 'EMAIL_ALREADY_EXIST':
                errorDetails.errorDescription = 'Error: Email already exist!';
                break;
            default:
                errorDetails.errorDescription = 'Error: user cannot created.';
        }
        return errorDetails
    }
}
