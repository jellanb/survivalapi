import createNewUser from '../../domain/usecase/create-new-user';
import { UserResult, UsersDetails } from '../../interfaces/usersInterface';


export const createUserController = async (userDetails: UsersDetails): Promise<UserResult> => {
    try {
        return await createNewUser(userDetails);
    } catch (error) {
        let errorMessage: string = '';
        if (error instanceof Error) {
            errorMessage = error.message
        }
        return {
            username: undefined,
            password: undefined,
            email: undefined,
            errorDescription: errorMessage
        }
    }
}
