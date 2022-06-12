import { StripePaymentRepository } from "../../infrastructure/persistence/repositories/sro_dev/StripePaymentRepository";
import {PaymentIntentInformation} from "../../interfaces/paymentInterfaces";


export default async function CreatePaymentIntent(paymentIntentInformation: PaymentIntentInformation, stripePaymentRepository: StripePaymentRepository) {

    await stripePaymentRepository.add({
        id: null,
        payment_intent_id: paymentIntentInformation.id,
        amount: paymentIntentInformation.amount,
        username: paymentIntentInformation.username,
        silk_intent: paymentIntentInformation.silk,
        payment_intent_date: new Date(Date.now()),
        payment_success_date: null
    });
}