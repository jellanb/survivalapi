import { KillUnique } from '../../entities/sro_dev/_KillerUniqueLog';
import { Op } from "sequelize";

export interface KillUniqueRepository {
    findLastKill: () => Promise<KillUnique[]>;
}

export function KillUniqueRepository(): KillUniqueRepository {
   return {
       findLastKill: async () => await KillUnique.findAll({
           where: { CharID : {[Op.not]: null} },
               limit: 1,
               order: [['KillTime', 'DESC']]
       })
   }
}

export default KillUniqueRepository();


