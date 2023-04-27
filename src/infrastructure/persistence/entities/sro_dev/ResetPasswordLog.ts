import {DataTypes, Model} from "sequelize";
import { sroDevDB } from "../../connectionManager/moduleConnections";

export class ResetPasswordLog extends Model{}

ResetPasswordLog.init({
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        field: 'ID'
    },
    hashCode: {
        type: DataTypes.STRING,
        field: 'HashCode',
    },
    username: {
        type: DataTypes.STRING,
        field: 'Username'
    },
    createdDate: {
        type: DataTypes.DATEONLY,
        field: 'CreatedDate',
    },
    email: {
        type: DataTypes.STRING,
        field: 'Email'
    },
    expiredDate: {
        type: DataTypes.DATEONLY,
        field: 'ExpiredDate',
    }
}, {
    sequelize: sroDevDB,
    freezeTableName: true,
    tableName: 'ResetPasswordLog',
    createdAt: false,
    updatedAt: false
})