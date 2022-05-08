import CreatePaymentIntent from "../../domain/usecase/create-payment-intent";
import StripePaymentRepository, {
    StripePaymentEntity
} from "../../infrastructure/persistence/repositories/sro_dev/StripePaymentRepository";


export default async function CreatePaymentIntentController(id: string){
    await CreatePaymentIntent(id, StripePaymentRepository)
}