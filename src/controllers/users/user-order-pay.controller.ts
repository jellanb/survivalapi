import userOrderPay from '../../domain/usecase/order-request-payment-paypal'
import OrderPaymentRequest from '../../infrastructure/service/payment/order-payment-request';
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

export default async function UserOrderPayController(
    username: string,
    amount: string,
    silkQuantity: string){
    try {
        return await userOrderPay(username, amount, silkQuantity, OrderPaymentRequest, SurvivalLogger)
    } catch (failure) {
        SurvivalLogger.error(failure.message)
        return failure
    }

}
