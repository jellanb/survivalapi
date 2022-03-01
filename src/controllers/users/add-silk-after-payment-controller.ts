import AddSilkToUser from '../../domain/usecase/add-silk-after-payment'
import SurvivalLogger from '../../infrastructure/observability/logging/logger';
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SilkRepository from '../../infrastructure/persistence/repositories/shard/SilkRepository';



export const addSilkAfterPaymentController = async (username: string, silkPay: string) => {
    const silkResult = await AddSilkToUser(username, silkPay, UserRepository, SilkRepository);
}
