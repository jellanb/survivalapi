import { KillUnique } from '../../entities/sro_dev/_KillerUniqueLog';

export interface KillUniqueRepository {
    findLastKill: () => Promise<KillUnique[]>;
}

export default async function lastUniqueKillRepository(): Promise<KillUniqueRepository> {
   return {
       findLastKill: async () => await KillUnique.findAll({
               limit: 1,
               order: [['KillTime', 'DESC']]
       })
   }
}


