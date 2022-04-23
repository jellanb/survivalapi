import {DataTypes, Model} from "sequelize";
import { sroDevDB } from "../../connectionManager/moduleConnections";

export class KillUnique extends Model{}

KillUnique.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: 'id'
    },
    monsterId: {
        type: DataTypes.INTEGER,
        field: 'RefMonsterId',
    },
    charId: {
        type: DataTypes.INTEGER,
        field: 'CharId'
    },
    killData: {
        type: DataTypes.DATE,
        field: 'KillTime'
    }
}, {
    sequelize: sroDevDB,
    freezeTableName: true,
    tableName: '_KillerUniqueLog',
    createdAt: false,
    updatedAt: false
})