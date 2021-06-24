"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.executePayment = exports.makeRequest = exports.makeSubscription = void 0;
const request_1 = __importDefault(require("request"));
const clientId = 'AWHJvbFj5JEt5QnBNs-D5Is15JfbVLHQ5aBaQa8nUm8d_fUJZM0wexTaW9F4KWphiz3EdP-kzlS6tM__';
const secret = 'EMo08dX9otbGs6IeyyLTT5JJtecNUkpzQ_zfGXhqMT51pzIulBxtd_e3Qn7fFTxw9yRJJh2VIU8JCWBt';
//const paypalApi = 'https://api-m.paypal.com';
const paypalApi = 'https://api-m.sandbox.paypal.com';
const auth = { user: clientId, pass: secret };
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
            return_url: `http://localhost:3002/survivalsro/api/Payment/executePayment?silkQuantity=${silkQuantity}&username=${username}`,
            cancel_url: `http://survivalsro.com` // Url despues de realizar el pago
        }
    };
};
exports.makeSubscription = makeSubscription;
const makeRequest = (res, subscription) => __awaiter(void 0, void 0, void 0, function* () {
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
});
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
