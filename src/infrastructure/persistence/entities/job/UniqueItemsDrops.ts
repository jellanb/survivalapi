import {DataTypes, Model} from "sequelize";
import { sroDevDB } from "../../connectionManager/moduleConnections";

export class UniqueItemsDrops extends  Model{}

UniqueItemsDrops.init({
    id:{
        primaryKey: true,
        allowNull: false,
        type: DataTypes.INTEGER,
        field: 'ID'
    },
    id_unique:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Id_Unique'
    },
    item_code:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Item_Code'
    },
    item_name:{
        type: DataTypes.STRING,
        allowNull: false,
        field: 'Item_Name'
    },
    monster_code:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'Monster_CODE'
    },
    drop_ratio:{
        type: DataTypes.REAL,
        field: 'Drop_ratio',
        allowNull: false
    },
    drop_min:{
        type: DataTypes.REAL,
        field: 'Drop_Min',
        allowNull: false
    },
    drop_max:{
        type: DataTypes.REAL,
        field: 'Drop_Max',
        allowNull: false
    }
},{
    sequelize: sroDevDB,
    freezeTableName: true,
    tableName: 'UniqueItemsDrop',
    createdAt: false,
    updatedAt: false
})