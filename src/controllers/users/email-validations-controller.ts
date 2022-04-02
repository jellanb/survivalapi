import EmailValidations from '../../domain/usecase/email-singup-validatetions';
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";


export default async function emailValidationsController(email: string) {
    return await EmailValidations(email, UserRepository);
}
