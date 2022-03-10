import express from 'express';
import { executePayment, makeRequest, makeSubscription } from '../../../payment';
import stripe from 'stripe';
import mercadopago from 'mercadopago';
import { addSilkAfterPaymentController } from '../../../controllers/users/add-silk-after-payment-controller';
import SurvivalLogger from '../../observability/logging/logger';

const router = express.Router()
const apiKeyStripe = process.env.apiKeyStripe ?? ''
const stripePayment = new stripe( apiKeyStripe, { apiVersion: '2020-08-27' })
const tokenMP = process.env.ACCESS_TOKEN_MP ?? ''

router.get('/create-payment-paypal', async (req,res) => {
    const amount = req.query.amount!.toString();
    const username = req.query.username!.toString();
    const silkQuantity = req.query.silkQuantity!.toString();
    try {
        SurvivalLogger.info(`Init intention to pay silk with PayPal from username: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
        await makeRequest(res,makeSubscription(parseInt(amount), silkQuantity, username));
    }
    catch (e) {
        SurvivalLogger.error(`[ERROR] Cannot request intention pay from user: ${username} with amount: ${amount} and quantity silk: ${silkQuantity}`);
        res.status(500);
    }
});

router.get('/executePaymentPaypal', async (req,res) => {
    try {
        const username = req.query.username!.toString();
        const silkQuantity = req.query.silkQuantity!.toString();
        const token = req.query.token!.toString();

        SurvivalLogger.info(`Init process payment request for username ${username} with silk quantity:${silkQuantity}`);
        const paymentSuccess = await executePayment(res, token, silkQuantity);

        if (paymentSuccess) {
            await addSilkAfterPaymentController(username, silkQuantity);
            SurvivalLogger.info(`Finish process payment request for username ${username} and silk quantity: ${silkQuantity}`);
            res.writeHead( 301, {Location : 'https://survivalsro.com'})
            res.end();
        } else {
            SurvivalLogger.error(`[ERROR] Cannot process payment to user: ${username} with silk: ${silkQuantity}`);
            res.status(500);
        }
    } catch (e) {
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
