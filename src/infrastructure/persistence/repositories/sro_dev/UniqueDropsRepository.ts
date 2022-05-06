import { UniqueDrios } from '../../entities/job/UniqueDrops';
import { Op } from "sequelize";

export interface UniqueDropsRepository {
    findByName: (uniqueName: string) => Promise<UniqueDrios[]>;
}

export function UniqueDropsRepository(): UniqueDropsRepository {
    return {
        findByName: async (uniqueName: string) => await UniqueDrios.findAll({
            where: { unique_name : uniqueName }
        })
    }
}

export default UniqueDropsRepository();