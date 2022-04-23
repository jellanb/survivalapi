import { shardDB } from '../../connectionManager/moduleConnections'

export interface SystemRepository{
    getSystemTime: () => Promise<unknown>
}

export function SystemRepository(): SystemRepository {
    return {
        getSystemTime: async () => {
            const [results] = await shardDB.query('SELECT SYSDATETIME() AS SYSTEM_TIME')
            return results[0]
        }
    }    
}

export default  SystemRepository();