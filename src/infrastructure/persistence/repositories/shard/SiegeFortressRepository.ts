import { SiegeFortress } from '../../entities/shard/_SiegeFortess'
import { Op } from 'sequelize'


export interface SiegeFortressRepository {
    getAllGuildOccupiedFortress: () => Promise<SiegeFortress[] | null>
}

export function SiegeFortressRepository(): SiegeFortressRepository {
    return {
        getAllGuildOccupiedFortress: async () => await SiegeFortress.findAll({
            attributes: ['FortressID','GuildID'],
            where: { Introduction: { [Op.ne]: 'This fortress is free!' } }
        })
    }
}

export default SiegeFortressRepository();
