import {DataTypes, Model} from "sequelize";
import { sroDevDB } from "../../connectionManager/moduleConnections";

export class UniqueDrios extends Model{}

UniqueDrios.init({
    id:{
        type: DataTypes.INTEGER,
        field: 'ID',
        primaryKey: true,
        allowNull: false
    },
    unique_name:{
        type: DataTypes.STRING,
        field: 'Unique_Name',
        allowNull: false
    },
    unique_group:{
        type: DataTypes.STRING,
        field: 'Unique_Group',
        allowNull: false
    },
    created_date:{
        type: DataTypes.DATE,
        field: 'Created_Date',
        allowNull: false
    },
    update_date:{
        type: DataTypes.DATE,
        field: 'Update_Date',
        allowNull: false
    }
},{
    sequelize: sroDevDB,
    freezeTableName: true,
    tableName: 'UniqueDrops',
    createdAt: false,
    updatedAt: false
})