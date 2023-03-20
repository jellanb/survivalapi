import { KillUnique } from '../../entities/sro_dev/_KillerUniqueLog';
import { Op } from "sequelize";

export interface KillUniqueRepository {
    findLastKill: () => Promise<KillUnique[]>;
    findUniqueKillInfoByUniqueId: (id: number) => Promise<KillUnique | null>;
}

export function KillUniqueRepository(): KillUniqueRepository {
   return {
       findLastKill: async () => await KillUnique.findAll({
           where: { CharID : {[Op.not]: null} },
               limit: 1,
               order: [['KillTime', 'DESC']]
       }),
       findUniqueKillInfoByUniqueId: async (id: number) => await KillUnique.findOne({
        where: { RefMonsterID : id },
            limit: 1,
            order: [['AppearedTime', 'DESC']]
    })
   }
}

export default KillUniqueRepository();


