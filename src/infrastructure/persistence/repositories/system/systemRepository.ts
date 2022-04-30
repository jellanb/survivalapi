import { shardDB } from '../../connectionManager/moduleConnections'

export interface SystemRepository{
    getSystemTime: () => Promise<[unknown[], unknown]>
}

export function SystemRepository(): SystemRepository {
    return {
        getSystemTime: async () => await shardDB.query('SELECT SYSDATETIME() AS SYSTIME_TIME')
    }    
}

export default SystemRepository()