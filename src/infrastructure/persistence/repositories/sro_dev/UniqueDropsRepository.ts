import { UniqueDrops } from '../../entities/job/UniqueDrops';

export interface UniqueDropsRepository {
    findAll: () => Promise<UniqueDrops[]>
    findByName: (uniqueName: string) => Promise<UniqueDrops[]>;
}

export function UniqueDropsRepository(): UniqueDropsRepository {
    return {
        findAll: async () => await UniqueDrops.findAll({
            attributes: ['Unique_Name']
        }),
        findByName: async (uniqueName: string) => await UniqueDrops.findAll({
            where: { unique_name : uniqueName }
        })
    }
}

export default UniqueDropsRepository();