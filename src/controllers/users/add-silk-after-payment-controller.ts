import AddSilkToUser from '../../domain/usecase/add-silk-after-payment'
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import SilkRepository from '../../infrastructure/persistence/repositories/shard/SilkRepository';



export const addSilkAfterPaymentController = async (username: string, silkPay: string) => {
    //TODO: handler error in this section
        return await AddSilkToUser(username, silkPay, UserRepository, SilkRepository);
}
