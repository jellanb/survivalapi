import ExecuteOrderPayment from '../../controllers/users/execute-order.payment'
import ExecuteOrderPaymentRequest from '../../infrastructure/service/payment/execute-order-payment-request'
import SurvivalLogger from '../../infrastructure/observability/logging/logger'
import UserRepository from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository'
import SilkRepository from '../../infrastructure/persistence/repositories/shard/SilkRepository'


export default async function ExecuteOrderPaymentController(username: string, silkRequest: string, token: string ) {
    try {
        return await ExecuteOrderPayment(username, silkRequest, token, ExecuteOrderPaymentRequest, SurvivalLogger, UserRepository, SilkRepository)
    } catch (failure) {
        SurvivalLogger.error(`[Error] Cannot execute payment to user ${username} ${failure}`)
    }

}
