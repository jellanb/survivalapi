import request from "request-promise";
import config from "../../../utils/config";
import axios, {AxiosResponse} from 'axios'

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
    executedRequestPayment: (subscription: Subscription) =>  Promise<any>
}

const auth = { user: `${config.paypalClientId}`, pass: `${config.paypalSecret}` }

export function OrderPaymentRequest(): OrderPaymentRequest {
        return {
            executedRequestPayment: async (subscription: Subscription) => {
                const req = await request.post(`${config.paypalUrl}/v2/checkout/orders`, {
                    auth,
                    body: subscription,
                    json: true
                })
                return req.links.find((link: links) => link.rel === 'approve');
            }
        }
}

export default OrderPaymentRequest();
