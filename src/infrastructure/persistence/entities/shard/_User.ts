import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class UserAndChar extends Model{}

UserAndChar.init({
    userId: {
        type: DataTypes.INTEGER,
        field: 'UserJID',
        allowNull: false
    },
    charId:{
        type: DataTypes.INTEGER,
        field: 'CharID',
        allowNull: false
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_User',
    createdAt: false,
    updatedAt: false
})
