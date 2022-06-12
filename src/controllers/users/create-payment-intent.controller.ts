import CreatePaymentIntent from "../../domain/usecase/create-payment-intent";
import StripePaymentRepository, {
    StripePaymentEntity
} from "../../infrastructure/persistence/repositories/sro_dev/StripePaymentRepository";
import {PaymentIntentInformation} from "../../interfaces/paymentInterfaces";



export default async function CreatePaymentIntentController(paymentIntentInformation: PaymentIntentInformation){
    await CreatePaymentIntent(paymentIntentInformation, StripePaymentRepository)
}