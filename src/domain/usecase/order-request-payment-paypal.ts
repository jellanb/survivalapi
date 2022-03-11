import {OrderPaymentRequest} from '../../infrastructure/service/payment/order-payment-request';
import config from '../../utils/config';
import {SurvivalLogger} from "../../infrastructure/observability/logging/logger";

interface Subscription {
    intent: string,
    purchase_units: [PurchaseUnits]
    application_context: ApplicationContext
}
interface PurchaseUnits {
    amount: Amount
}
interface Amount {
    currency_code: string,
    value: number
}
interface ApplicationContext {
    brand_name: string,
    landing_page: string,
    user_action: string,
    return_url: string,
    cancel_url: string
}

export default async function OrderRequestPaymentPaypal(
    username: string,
    amount: string,
    silkQuantity: string,
    orderPaymentRequest: OrderPaymentRequest,
    logger: SurvivalLogger) {
    const makeSubscription = (username: string, amount: number, silkQuantity: string): Subscription => {
        return {
            intent: 'CAPTURE',
            purchase_units: [{
                amount: {
                    currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
                    value: amount
                }
            }],
            application_context: {
                brand_name: `survivalsro.com`,
                landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
                user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
                return_url: `${config.httpServerUrl}/Payment/executePaymentPaypal?silkQuantity=${silkQuantity}&username=${username}`, // Url despues de realizar el pago
                cancel_url: `https://survivalsro.com` // Url despues de realizar el pago
            }
        }
    }
    logger.info(`Init intention to pay silk with PayPal from username: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
    const paymentRequestApprove = await orderPaymentRequest.executedRequestPayment(makeSubscription(username, parseInt(amount), silkQuantity));

    if (!paymentRequestApprove) throw Error(`[ERROR] Payment request cannot process!`);
    logger.info(`Finish intention to pay silk with PayPal from username: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
    return paymentRequestApprove;
}
