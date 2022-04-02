import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";
import AccountValidations from "../../domain/usecase/account-singup-validations";


export default async function AccountValidationsController(username: string) {
    return await AccountValidations(username, UserRepository);
}
