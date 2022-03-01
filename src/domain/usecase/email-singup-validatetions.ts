import {UserRepository} from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

export default async function EmailValidations(email: string, userRepository: UserRepository) {
    SurvivalLogger.info(`Init email validation to username: ${email}`);
    let emailValidationResult = {
        isValid: false
    };
    const emailResult = await userRepository.findUserByEmail(email);
    if (!emailResult) emailValidationResult.isValid = true;
    SurvivalLogger.info(`Finish username validation to username: ${email} with result: ${emailValidationResult.isValid}`);
    return emailValidationResult;
}
