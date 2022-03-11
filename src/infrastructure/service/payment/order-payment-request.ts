import request from "request";
import config from "../../../utils/config";

interface paypalOrderCreated {
    data: data
}
interface data{
    id: string,
    status: string,
    links: links[]
}
interface links {
    href: string,
    rel: string,
    method: string
}
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
export interface OrderPaymentRequest {
    executedRequestPayment: (subscription: Subscription) => request.Request
}

const auth = { user: `${config.paypalClientId}`, pass: `${config.paypalSecret}` }

export function OrderPaymentRequest(): OrderPaymentRequest {
        return {
            executedRequestPayment: (subscription: Subscription) => {
                return request.post(`${config.paypalUrl}/v2/checkout/orders`, {
                    auth,
                    body: subscription,
                    json: true
                }, async (err, response) => {
                    const result: paypalOrderCreated = {data: response.body};
                    return result.data.links.find((link) => link.rel === 'approve');
                })
            }
        }
}

export default OrderPaymentRequest();
