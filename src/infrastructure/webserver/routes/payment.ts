import express from 'express';
import stripe from 'stripe';
import mercadopago from 'mercadopago';
import SurvivalLogger from '../../observability/logging/logger';
import UserOrderPayController from "../../../controllers/users/user-order-pay.controller";
import ExecuteOrderPaymentController from "../../../domain/usecase/execute-order-payment.controller";

const router = express.Router()
const apiKeyStripe = process.env.apiKeyStripe ?? ''
const stripePayment = new stripe( apiKeyStripe, { apiVersion: '2020-08-27' })
const tokenMP = process.env.ACCESS_TOKEN_MP ?? ''

router.get('/create-payment-paypal', async (req,res) => {
    const amount = req.query.amount!.toString();
    const username = req.query.username!.toString();
    const silkQuantity = req.query.silkQuantity!.toString();
    try {
        res.send(await UserOrderPayController(username, amount, silkQuantity));
    }
    catch (e) {
        SurvivalLogger.error(`[ERROR] Cannot request intention pay from user: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
        res.status(500);
    }
});

router.get('/executePaymentPaypal', async (req,res) => {
    const username = req.query.username!.toString();
    const silkQuantity = req.query.silkQuantity!.toString();
    const token = req.query.token!.toString();

    try {
        SurvivalLogger.info(`Init process payment request for username ${username} with silk quantity:${silkQuantity}`);
        const paymentResult =  await ExecuteOrderPaymentController(username, silkQuantity, token);
        if (paymentResult!.state === 'success') {
            res.writeHead( 301, {Location : 'https://survivalsro.com'})
            res.end();
        }
        SurvivalLogger.info(`Finish process payment request for username ${username} and silk quantity: ${silkQuantity}`);
    } catch (e) {
        SurvivalLogger.error(`[ERROR] Cannot process payment to user: ${username} with silk: ${silkQuantity}`);
        res.status(500);
    }
});

router.post('/createPaymentIntentStripe', async (req, res) => {
    const { items } = req.body;
    console.log(apiKeyStripe)

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

router.post('/process-payment-mercadopago', async (req, res) =>{
    console.log(`generando pago con mercado pago por un valor de ${req.body.transaction_amount}USD`)
    console.log(tokenMP)
    mercadopago.configurations.setAccessToken(tokenMP);
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

    mercadopago.payment
        .save(payment_data)
        .then((response: { status: number; body: { status: any; status_detail: any; id: any; }; }) => {
            return res.status(response.status).json({
                status: response.body.status,
                status_detail: response.body.status_detail,
                id: response.body.id,
            });
        })
        .catch((err: any) => {
            return res.status(500).send(err);
        });
});

export = router
