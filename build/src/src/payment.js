"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executePayment = exports.makeRequest = exports.makeSubscription = void 0;
const request_1 = __importDefault(require("request"));
const paypalApi = `${process.env['paypalUrl']}`;
const auth = { user: `${process.env['paypalClientId']}`, pass: `${process.env['paypalSecret']}` };
const makeSubscription = (amount, silkQuantity, username) => {
    return {
        intent: 'CAPTURE',
        purchase_units: [{
                amount: {
                    currency_code: 'USD',
                    value: amount
                }
            }],
        application_context: {
            brand_name: `survivalsro.com`,
            landing_page: 'NO_PREFERENCE',
            user_action: 'PAY_NOW',
            return_url: `http://localhost:3002/Payment/executePaymentPaypal?silkQuantity=${silkQuantity}&username=${username}`,
            cancel_url: `http://survivalsro.com` // Url despues de realizar el pago
        }
    };
};
exports.makeSubscription = makeSubscription;
const makeRequest = async (res, subscription) => {
    try {
        request_1.default.post(`${paypalApi}/v2/checkout/orders`, {
            auth,
            body: subscription,
            json: true
        }, (err, response) => {
            console.log(`make payment for amount ${subscription}`);
            const result = { data: response.body };
            res.json(result.data.links.find((link) => link.rel === 'approve'));
        });
    }
    catch (error) {
        console.log(error);
    }
};
exports.makeRequest = makeRequest;
const executePayment = (res, token, silkQuantity) => {
    return request_1.default.post(`${paypalApi}/v2/checkout/orders/${token}/capture`, {
        auth,
        body: {},
        json: true
    }, (err, response) => {
        return { data: response.body };
    });
};
exports.executePayment = executePayment;
