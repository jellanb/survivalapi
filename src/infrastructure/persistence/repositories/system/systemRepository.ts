import { shardDB } from '../../connectionManager/moduleConnections'

export interface SystemRepository{
    getSystemTime: () => Promise<[unknown[], unknown]>
}

export async function SystemRepository(): Promise<SystemRepository> {
    return {
        getSystemTime: async () => await shardDB.query('SELECT SYSDATETIME() AS SYSTIME_TIME')
    }    
}

export default await SystemRepository()