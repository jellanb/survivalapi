import  request  from "request";


const clientId = 'AWHJvbFj5JEt5QnBNs-D5Is15JfbVLHQ5aBaQa8nUm8d_fUJZM0wexTaW9F4KWphiz3EdP-kzlS6tM__';
const secret = 'EMo08dX9otbGs6IeyyLTT5JJtecNUkpzQ_zfGXhqMT51pzIulBxtd_e3Qn7fFTxw9yRJJh2VIU8JCWBt';
const paypalApi = 'https://api-m.sandbox.paypal.com';

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

const auth = { user: clientId, pass: secret }
export const makeSubscription = (amount: number) => {

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
            return_url: `http://localhost:3000/survivalsro/api/Payment/executePayment`, // Url despues de realizar el pago
            cancel_url: `http://survival.com` // Url despues de realizar el pago
        }
    }

}

export const makeRequest = async (res: any, subscription: object) => {
    try {
        request.post(`${paypalApi}/v2/checkout/orders`, {
            auth,
            body: subscription,
            json: true
        },(err, response) => {
            console.log(`make payment for amount ${subscription}`)
            const result: paypalOrderCreated = { data: response.body };
            res.json(result.data.links.find((link) => link.rel === 'approve'));
        });
    } catch (error) {
        console.log(error);
    }
}

export const executePayment = (res: any, token: string) => {
    try {
        request.post(`${paypalApi}/v2/checkout/orders/${token}/capture`, {
            auth,
            body: {},
            json: true
        }, (err, response) => {
            console.log({ data: response.body })
            res.redirect('paymentSuccess')
        })
    } catch (error) {
        console.log(error);
    }
}
