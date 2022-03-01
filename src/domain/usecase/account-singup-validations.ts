import {UserRepository} from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";


export default async function AccountValidations(username: string, userRepository: UserRepository) {
    SurvivalLogger.info(`Init username validation to username: ${username}`);
    let userNameValidationResult = {
        isValid: false
    };
    const user = await userRepository.findUserByName(username);
    if (user) userNameValidationResult.isValid = true;
    SurvivalLogger.info(`Finish username validation to username: ${username} with result: ${userNameValidationResult.isValid}`);
    return userNameValidationResult;
}
