import {StripePaymentRepository} from "../../infrastructure/persistence/repositories/sro_dev/StripePaymentRepository";
import {UserRepository} from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import {SilkRepository} from "../../infrastructure/persistence/repositories/shard/SilkRepository";
import addSilkAfterPayment from "./add-silk-after-payment";
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

export default async function AddPaymentSuccessFully(id: string, stripePaymentRepository: StripePaymentRepository, userRepository: UserRepository, silkRepository: SilkRepository) {
    SurvivalLogger.info('Init process to load payment successfully information');
    SurvivalLogger.info(`Getting stripe entity for id ${id}`);
    const paymentIntent = await stripePaymentRepository.findById(id);
    if (!paymentIntent) throw new Error('PaymentNotFoundException');
    const username = paymentIntent.getDataValue('user_name');
    const silk = paymentIntent.getDataValue('silk_intent');
    SurvivalLogger.info(`Stripe entity got for id ${id} and username: ${username} to load silk amount: ${silk}`);
    SurvivalLogger.info(`Init update stripe entity from username ${username} and id payment: ${id}`);
    await stripePaymentRepository.update({
        payment_success_date: new Date(Date.now()),
        payment_intent_id: paymentIntent.getDataValue('payment_success_date'),
        payment_intent_date: paymentIntent.getDataValue('payment_intent_date'),
        username: username,
        silk_intent: silk,
        amount: paymentIntent.getDataValue('amount'),
        id: null
    });
    SurvivalLogger.info(`Finish update stripe entity from username ${username} and id payment: ${id}`);
    SurvivalLogger.info('Finish process to load payment successfully information');
    await addSilkAfterPayment(username, silk, userRepository, silkRepository);

}