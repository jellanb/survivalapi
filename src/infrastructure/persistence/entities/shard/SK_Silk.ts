import { DataTypes, Model} from "sequelize";
import { accountDB } from '../../connectionManager/moduleConnections'

export class Silk extends Model{}

Silk.init({
    Id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'JID',
        allowNull: false
    },
    SilkOwn:{
        type: DataTypes.INTEGER,
        field: 'silk_own',
        allowNull: false
    },
    SilkGift:{
        type: DataTypes.INTEGER,
        field: 'silk_gift',
        allowNull: false
    },
    silkPoint:{
        type: DataTypes.INTEGER,
        field: 'silk_point',
        allowNull: false
    }
},
    {
        sequelize: accountDB,
        freezeTableName: true,
        tableName: 'SK_Silk',
        createdAt: false,
        updatedAt: false,
    });
