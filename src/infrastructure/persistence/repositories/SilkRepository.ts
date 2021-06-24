import { Silk } from '../entities/SK_Silk'


export const findSilkById = async (id: number) => {
        const silkFromUser = await Silk.findAll({
            attributes: ['silk_own'],
            where: { Id: id }
        });

        return silkFromUser[0]
}

export const createSilk = async (userID: number, silkQuantity: number) => {
    try {
        const newSilk = await Silk.create({
            Id: userID,
            SilkOwn: silkQuantity,
            SilkGift: 0,
            SilkPoint: 0
        })
        console.log(newSilk)
        console.log('Silk add successfully!')
        return newSilk
    } catch (error) {
        console.log(error)
    }
}

export const updateSilk = async (userID: number, silkQuantity: number) => {
    try {
        const updateSilk = await Silk.create({
            Id: userID,
            SilkOwn: silkQuantity,
            SilkGift: 0,
            silkPoint: 0
        })
        await updateSilk.save()
        console.log('silk update successfully!')
        return updateSilk
    } catch (error) {
        console.log(error)
    }
}
