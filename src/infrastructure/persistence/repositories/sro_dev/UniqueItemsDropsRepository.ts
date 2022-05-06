import { UniqueItemsDrops } from '../../entities/job/UniqueItemsDrops';

export interface UniqueItemsDropsRepository {
    findById: (id: number) => Promise<UniqueItemsDrops[] | null>;
}

export function UniqueItemsDropsRepository(): UniqueItemsDropsRepository {
    return {
        findById: async (id: number) => await UniqueItemsDrops.findAll({
            where: { id_unique: id }
        })
    }
}

export default UniqueItemsDropsRepository();