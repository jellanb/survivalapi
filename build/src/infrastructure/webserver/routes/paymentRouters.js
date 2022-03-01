"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
const express_1 = __importDefault(require("express"));
const payment_1 = require("../../../payment");
const stripe_1 = __importDefault(require("stripe"));
const mercadopago_1 = __importDefault(require("mercadopago"));
const add_silk_after_payment_controller_1 = require("../../../controllers/users/add-silk-after-payment-controller");
const logger_1 = __importDefault(require("../../observability/logging/logger"));
const router = express_1.default.Router();
const apiKeyStripe = (_a = process.env.apiKeyStripe) !== null && _a !== void 0 ? _a : '';
const stripePayment = new stripe_1.default(apiKeyStripe, { apiVersion: '2020-08-27' });
const tokenMP = (_b = process.env.ACCESS_TOKEN_MP) !== null && _b !== void 0 ? _b : '';
router.get('/create-payment-paypal', async (req, res) => {
    const amount = req.query.amount.toString();
    const username = req.query.username.toString();
    const silkQuantity = req.query.silkQuantity.toString();
    try {
        logger_1.default.info(`Init intention to pay silk with PayPal from username: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
        await (0, payment_1.makeRequest)(res, (0, payment_1.makeSubscription)(parseInt(amount), username, silkQuantity));
    }
    catch (e) {
        logger_1.default.error(`[ERROR] Cannot request intention pay from user: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
        res.status(500);
    }
});
router.get('/executePaymentPaypal', async (req, res) => {
    try {
        const username = req.query.username.toString();
        const silkQuantity = req.query.silkQuantity.toString();
        const token = req.query.token.toString();
        logger_1.default.info(`Init process payment request for username ${username} with silk quantity:${silkQuantity}`);
        const paymentSuccess = await (0, payment_1.executePayment)(res, token, silkQuantity);
        if (paymentSuccess) {
            await (0, add_silk_after_payment_controller_1.addSilkAfterPaymentController)(username, silkQuantity);
            logger_1.default.info(`Finish process payment request for username ${username} and silk quantity: ${silkQuantity}`);
            res.writeHead(301, { Location: 'https://survivalsro.com' });
            res.end();
        }
        else {
            logger_1.default.error(`[ERROR] Cannot process payment to user: ${username} with silk: ${silkQuantity}`);
            res.status(500);
        }
    }
    catch (e) {
        res.status(500);
    }
});
router.post('/createPaymentIntentStripe', async (req, res) => {
    const { items } = req.body;
    console.log(apiKeyStripe);
    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripePayment.paymentIntents.create({
        amount: 1000,
        currency: 'USD',
        automatic_payment_methods: {
            enabled: true,
        },
    });
    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});
router.post('/process-payment-mercadopago', async (req, res) => {
    console.log(`generando pago con mercado pago por un valor de ${req.body.transaction_amount}USD`);
    console.log(tokenMP);
    mercadopago_1.default.configurations.setAccessToken(tokenMP);
    const payment_data = {
        transaction_amount: req.body.transaction_amount,
        token: req.body.token,
        description: req.body.description,
        installments: Number(req.body.installments),
        payment_method_id: req.body.paymentMethodId,
        issuer_id: req.body.issuer,
        payer: {
            email: req.body.payer.email,
            identification: {
                type: req.body.payer.docType,
                number: req.body.payer.docNumber,
            },
        },
    };
    mercadopago_1.default.payment
        .save(payment_data)
        .then((response) => {
        return res.status(response.status).json({
            status: response.body.status,
            status_detail: response.body.status_detail,
            id: response.body.id,
        });
    })
        .catch((err) => {
        return res.status(500).send(err);
    });
});
module.exports = router;
