import { StripePayment } from '../../entities/sro_dev/StripePayment'

export interface StripePaymentEntity {
    id: number | null,
    payment_intent_id: string,
    amount: number,
    username: string,
    silk_intent: number,
    payment_intent_date: Date,
    payment_success_date: Date | null
}

export interface StripePaymentRepository {
    findById: (id: string) => Promise<StripePayment | null>,
    add: (stripeEntity: StripePaymentEntity) => Promise<StripePayment | undefined>,
    update: (stripeEntity: StripePaymentEntity) => Promise<[affectedCount: number]>
}

export function StripePaymentRepository(): StripePaymentRepository {
    return {
        findById: async (id) => {
            const silkFromUser = await StripePayment.findOne({
                where: { payment_intent_id:id }
            });
            return silkFromUser
        },
        add: async (stripeEntity) => {
            const newSilk = await StripePayment.create({
                id: stripeEntity.id,
                payment_intent_id: stripeEntity.payment_intent_id,
                amount: stripeEntity.amount,
                user_name: stripeEntity.username,
                silk_intent: stripeEntity.silk_intent,
                payment_intent_date: stripeEntity.payment_intent_date,
                payment_success_date: stripeEntity.payment_success_date
            })
            return newSilk
        },
        update: async (stripeEntity) => {
            const updateSilk = await StripePayment.update({
                payment_success_date: stripeEntity.payment_success_date
            }, {
                where: { id: stripeEntity.id }
            })
            return updateSilk
        }
    }
}

export default StripePaymentRepository();
