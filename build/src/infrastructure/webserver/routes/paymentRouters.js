"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b;
const express_1 = __importDefault(require("express"));
const payment_1 = require("../../../payment");
const TB_UsersRepository_1 = require("../../persistence/repositories/shard/TB_UsersRepository");
const SilkRepository_1 = require("../../persistence/repositories/shard/SilkRepository");
const stripe_1 = __importDefault(require("stripe"));
const mercadopago_1 = __importDefault(require("mercadopago"));
const router = express_1.default.Router();
const apiKeyStripe = (_a = process.env.apiKeyStripe) !== null && _a !== void 0 ? _a : '';
const stripePayment = new stripe_1.default(apiKeyStripe, { apiVersion: '2020-08-27' });
const tokenMP = (_b = process.env.ACCESS_TOKEN_MP) !== null && _b !== void 0 ? _b : '';
router.get('/createPaymentPaypal', async (req, res) => {
    try {
        await (0, payment_1.makeRequest)(res, (0, payment_1.makeSubscription)(parseInt(req.query.amount.toString()), req.query.silkQuantity.toString(), req.query.username.toString()));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
});
router.get('/executePaymentPaypal', async (req, res) => {
    try {
        const paymentSuccess = await (0, payment_1.executePayment)(res, req.query.token.toString(), req.query.silkQuantity.toString());
        if (paymentSuccess) {
            const user = await (0, TB_UsersRepository_1.findUserByName)(req.query.username.toString());
            if (user) {
                const { JID } = JSON.parse(JSON.stringify(user));
                const silk = await (0, SilkRepository_1.findSilkById)(JID);
                if (silk) {
                    const { silk_own } = JSON.parse(JSON.stringify(silk));
                    const silkQuantity = silk_own + parseInt(req.query.silkQuantity.toString());
                    await (0, SilkRepository_1.updateSilk)(JID, silkQuantity);
                }
                else {
                    await (0, SilkRepository_1.createSilk)(JID, parseInt(req.query.silkQuantity.toString()));
                }
                console.log('payment success');
                res.writeHead(301, { Location: 'http://survivalsro.com' });
                res.end();
            }
            else {
                console.log('payment failed');
                res.status(500);
            }
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
