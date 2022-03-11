import request from "request";
import config from "../../../utils/config";

export interface ExecuteOrderPaymentRequest {
    orderPaymentRequest: (token: string) => request.Request
}

const auth = { user: `${config.paypalClientId}`, pass: `${config.paypalSecret}` }

export function ExecuteOrderPaymentRequest(): ExecuteOrderPaymentRequest {
    return {
        orderPaymentRequest: (token: string) => {
            return request.post(`${config.paypalUrl}/v2/checkout/orders/${token}/capture`, {
                auth,
                body: {},
                json: true
            }, (err, response) => {
                return {data: response.body}
            })
        }
    }
}

export default ExecuteOrderPaymentRequest();

