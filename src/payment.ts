import  request  from "request";


const clientId = '';
const secret = '';
const paypalApi = 'https://api-m.sandbox.paypal.com';

const auth = { user: clientId, pass: secret }
const subscription = {
    intent: 'CAPTURE',
    purchase_units: [{
        amount: {
            currency_code: 'USD', //https://developer.paypal.com/docs/api/reference/currency-codes/
            value: '115'
        }
    }],
    application_context: {
        brand_name: `MiTienda.com`,
        landing_page: 'NO_PREFERENCE', // Default, para mas informacion https://developer.paypal.com/docs/api/orders/v2/#definition-order_application_context
        user_action: 'PAY_NOW', // Accion para que en paypal muestre el monto del pago
        return_url: `http://localhost:3000/execute-payment`, // Url despues de realizar el pago
        cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
    }
}

export const makeRequest = async (res: any) => {
    let result = null
    try {
        request.post(`${paypalApi}/v2/checkout/orders`, {
            auth,
            body: subscription,
            json: true
        },(err, response) => {
            const result = { data: response.body };
        });
    } catch (error) {
        console.log(error);
    }    
}
