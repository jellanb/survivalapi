import { StripePayment } from '../../entities/sro_dev/StripePayment'

export interface StripePaymentEntity {
    id: number,
    payment_intent_id: string,
    amount: number,
    silk_intent: number,
    payment_intent_date: Date,
    payment_success_date: Date
}

export interface StripePaymentRepository {
    findById: (id: number) => Promise<StripePayment>,
    add: (stripeEntity: StripePaymentEntity) => Promise<StripePayment | undefined>,
    update: (stripeEntity: StripePaymentEntity) => Promise<[affectedCount: number]>
}

export function StripePaymentRepository(): StripePaymentRepository {
    return {
        findById: async (id: number) => {
            const silkFromUser = await StripePayment.findAll({
                where: { id }
            });
            return silkFromUser[0]
        },
        add: async (stripeEntity) => {
            const newSilk = await StripePayment.create({
                id: stripeEntity.id,
                payment_intent_id: stripeEntity.payment_intent_date,
                amount: stripeEntity.amount,
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
