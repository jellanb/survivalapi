import { shardDB } from '../../connectionManager/moduleConnections'
import {QueryTypes} from "sequelize";

export interface SystemRepository{
    getSystemTime: () => Promise<string>
}

export function SystemRepository(): SystemRepository {
    return {
        getSystemTime: async () => {
            const [results] = await shardDB.query('SELECT SYSDATETIME() AS SYSTEM_TIME')
            return JSON.stringify(results[0])
        }
    }    
}

export default  SystemRepository();