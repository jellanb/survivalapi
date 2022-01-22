import express from 'express';
import {executePayment, makeRequest, makeSubscription} from "../../../payment";
import {findUserByName} from "../../persistence/repositories/shard/TB_UsersRepository";
import {createSilk, findSilkById, updateSilk} from "../../persistence/repositories/shard/SilkRepository";
import stripe from 'stripe';
import mercadopago from 'mercadopago';

interface userResult {
    StrUserID:string,
    JID:number,
    Email: string,
    password:string
}

interface SilkFromUser {
    silk_own: number
}

const router = express.Router()
const apiKeyStripe = process.env.apiKeyStripe ?? ''
const stripePayment = new stripe( apiKeyStripe, { apiVersion: '2020-08-27' })
const tokenMP = process.env.ACCESS_TOKEN_MP ?? ''

router.get('/createPaymentPaypal', async (req,res) => {
    try {
        await makeRequest(
            res,
            makeSubscription(
                parseInt(
                    req.query.amount!.toString()),
                req.query.silkQuantity!.toString(),
                req.query.username!.toString()
            )
        )
    }
    catch (e) {
        console.log(e)
        res.status(500);
    }
});

router.get('/executePaymentPaypal', async (req,res) => {
    try {
        const paymentSuccess = await executePayment(
            res, req.query.token!.toString(),
            req.query.silkQuantity!.toString()
        )
        if (paymentSuccess) {
            const user = await findUserByName(req.query.username!.toString())
            if (user){
                const { JID }: userResult  = JSON.parse(JSON.stringify(user))
                const silk = await findSilkById(JID)
                if (silk) {
                    const {silk_own}: SilkFromUser = JSON.parse(JSON.stringify(silk))
                    const silkQuantity = silk_own + parseInt(req.query.silkQuantity!.toString())
                    await updateSilk(JID, silkQuantity)
                } else {
                    await createSilk(JID, parseInt(req.query.silkQuantity!.toString()))
                }
                console.log('payment success')
                res.writeHead( 301, {Location : 'http://survivalsro.com'})
                res.end();
            } else {
                console.log('payment failed')
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

export = router
