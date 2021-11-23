import { DataTypes, Model} from "sequelize";
import { accountDB } from '../../connectionManager/moduleConnections'

export class Silk extends Model{}

Silk.init({
    Id:{
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'JID'
    },
    SilkOwn:{
        type: DataTypes.INTEGER,
        field: 'silk_own'
    },
    SilkGift:{
        type: DataTypes.INTEGER,
        field: 'silk_gift'
    },
    silkPoint:{
        type: DataTypes.INTEGER,
        field: 'silk_point'
    }
},
    {
        sequelize: accountDB,
        freezeTableName: true,
        tableName: 'SK_Silk',
        createdAt: false,
        updatedAt: false,
    });
