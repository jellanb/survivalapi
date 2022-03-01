import  request  from 'request';
import config from './utils/config'
import SurvivalLogger from './infrastructure/observability/logging/logger';

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

const auth = { user: `${config.paypalClientId}`, pass: `${config.paypalSecret}` }
export const makeSubscription = (amount: number, silkQuantity: string, username: string) => {

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
            cancel_url: `http://survivalsro.com` // Url despues de realizar el pago
        }
    }

}

export const makeRequest = async (res: any, subscription: object) => {
    try {
        request.post(`${config.paypalUrl}/v2/checkout/orders`, {
            auth,
            body: subscription,
            json: true
        },(err, response) => {
            const result: paypalOrderCreated = { data: response.body };
            res.json(result.data.links.find((link) => link.rel === 'approve'));
        });
    } catch (error) {
        console.log(error);
    }
}

export const executePayment = (res: any, token: string, silkQuantity: string): object => {
        return request.post(`${config.paypalUrl}/v2/checkout/orders/${token}/capture`, {
            auth,
            body: {},
            json: true
        }, (err, response) => {
            return { data: response.body }
        })
}
