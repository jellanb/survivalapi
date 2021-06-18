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
exports.makeRequest = void 0;
const request_1 = __importDefault(require("request"));
const clientId = 'AWHJvbFj5JEt5QnBNs-D5Is15JfbVLHQ5aBaQa8nUm8d_fUJZM0wexTaW9F4KWphiz3EdP-kzlS6tM__';
const secret = 'EMo08dX9otbGs6IeyyLTT5JJtecNUkpzQ_zfGXhqMT51pzIulBxtd_e3Qn7fFTxw9yRJJh2VIU8JCWBt';
const paypalApi = 'https://api-m.sandbox.paypal.com';
const auth = { user: clientId, pass: secret };
const subscription = {
    intent: 'CAPTURE',
    purchase_units: [{
            amount: {
                currency_code: 'USD',
                value: '115'
            }
        }],
    application_context: {
        brand_name: `MiTienda.com`,
        landing_page: 'NO_PREFERENCE',
        user_action: 'PAY_NOW',
        return_url: `http://localhost:3000/execute-payment`,
        cancel_url: `http://localhost:3000/cancel-payment` // Url despues de realizar el pago
    }
};
const makeRequest = (res) => __awaiter(void 0, void 0, void 0, function* () {
    let result = null;
    try {
        request_1.default.post(`${paypalApi}/v2/checkout/orders`, {
            auth,
            body: subscription,
            json: true
        }, (err, response) => {
            res.json({ data: response.body });
        });
    }
    catch (error) {
        console.log(error);
    }
});
exports.makeRequest = makeRequest;
