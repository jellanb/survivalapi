import { Silk } from '../../entities/shard/SK_Silk'

export interface SilkRepository {
    findById: (id: number) => Promise<Silk>,
    add: (userId: number, silkQuantity: number) => Promise<Silk | undefined>,
    update: (userId: number, silkQuantity: number) => Promise<[affectedCount: number]>
}

export function SilkRepository(): SilkRepository {
    return {
        findById: async (id: number) => {
            const silkFromUser = await Silk.findAll({
                attributes: ['silk_own'],
                where: { Id: id }
            });
            return silkFromUser[0]
        },
        add: async (userId: number, silkQuantity: number) => {
                const newSilk = await Silk.create({
                    Id: userId,
                    SilkOwn: silkQuantity,
                    SilkGift: 0,
                    silkPoint: 0
                })
                return newSilk
        },
        update: async (userId: number, silkQuantity: number) => {
                const updateSilk = await Silk.update({
                    Id: userId,
                    SilkOwn: silkQuantity,
                    SilkGift: 0,
                    silkPoint: 0
                }, {
                    where: { JID: userId }
                })
                return updateSilk
        }
    }
}

export default SilkRepository();
