import { UniqueItemsDrops } from '../../entities/job/UniqueItemsDrops';

interface UniqueItemsDropsEntity {
    id: number, provability: number, minDrop: number, maxDrop: number
}

export interface UniqueItemsDropsRepository {
    findById: (id: number) => Promise<UniqueItemsDrops[] | null>;
    findByIdAndItemCode: (id: number, itemCode: number) => Promise<UniqueItemsDrops | null>;
    update: (uniqueItemsDropsEntity: UniqueItemsDropsEntity) => Promise<[affectedCount: number]>
}

export function UniqueItemsDropsRepository(): UniqueItemsDropsRepository {
    return {
        findById: async (id) => await UniqueItemsDrops.findAll({
            where: { id_unique: id }
        }),
        findByIdAndItemCode: async (id, itemCode) => await UniqueItemsDrops.findOne({
            where: { monster_code: id, item_code: itemCode }
        }),
        update: (uniqueItemsDropsEntity) => UniqueItemsDrops.update({
            drop_ratio: uniqueItemsDropsEntity.provability,
            drop_min: uniqueItemsDropsEntity.minDrop,
            drop_max: uniqueItemsDropsEntity.maxDrop
        }, {
            where: {id: uniqueItemsDropsEntity.id}
        })

    }
}

export default UniqueItemsDropsRepository();