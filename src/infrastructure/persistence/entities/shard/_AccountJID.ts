import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class AccountJID extends Model{}

AccountJID.init({
    account: {
        type: DataTypes.STRING,
        field: 'AccountID',
        allowNull: false,
        primaryKey: true
    },
    id:{
        type: DataTypes.INTEGER,
        field: 'JID',
        allowNull: false
    },
    gold:{
        type: DataTypes.INTEGER,
        field: 'Gold',
        allowNull: false,
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_AccountJID',
    createdAt: false,
    updatedAt: false
})
