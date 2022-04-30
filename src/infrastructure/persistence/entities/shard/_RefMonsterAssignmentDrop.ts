import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class MonsterAssignmentDrop extends Model{}

MonsterAssignmentDrop.init({
    monster_id:{
        type: DataTypes.INTEGER,
        field: 'RefMonsterID',
        primaryKey: true,
        allowNull: false
    },
    item_id:{
        type: DataTypes.INTEGER,
        field : 'RefItemID',
        allowNull: false
    },
    drop_group:{
        type: DataTypes.INTEGER,
        field: 'DropGroupType',
        allowNull: false
    },
    plus:{
        type: DataTypes.INTEGER,
        field: 'OptLevel',
        allowNull: false
    },
    drop_min_quantity:{
        type: DataTypes.INTEGER,
        field: 'DropAmountMin',
        allowNull: false
    },
    drop_max_quantity:{
        type: DataTypes.INTEGER,
        field: 'DropAmountMax',
        allowNull: false
    },
    drop_radio:{
        type: DataTypes.INTEGER,
        field: 'DropRatio',
        allowNull: false
    },
    magic_option:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID1'
    },
    custom_value:{
        type: DataTypes.INTEGER,
        field: 'CustomValue1'
    },
    magic_option_2:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID2'
    },
    custom_value_2:{
        type: DataTypes.INTEGER,
        field: 'CustomValue2',
    },
    magic_option_3:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID3'
    },
    custom_value_3:{
        type: DataTypes.INTEGER,
        field: 'CustomValue3'
    },
    magic_option_4:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID4'
    },
    custom_value_4:{
        type: DataTypes.INTEGER,
        field: 'CustomValue4'
    },
    magic_option_5:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID5'
    },
    custom_value_5:{
        type: DataTypes.INTEGER,
        field: 'CustomValue5'
    },
    magic_option_6:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID6'
    },
    custom_value_6:{
        type: DataTypes.INTEGER,
        field: 'CustomValue6'
    },
    magic_option_7:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID7'
    },
    custom_value_7:{
        type: DataTypes.INTEGER,
        field: 'CustomValue7'
    },
    magic_option_8:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID8'
    },
    custom_value_8:{
        type: DataTypes.INTEGER,
        field: 'CustomValue8'
    },
    magic_option_9:{
        type: DataTypes.INTEGER,
        field: 'RefMagicOptionID9'
    },
    custom_value_9:{
        type: DataTypes.INTEGER,
        field: 'CustomValue9'
    },
    rent_code_name:{
        type: DataTypes.STRING,
        field: 'RentCodeName'
    }
},{
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_RefMonster_AssignedItemDrop',
    createdAt: false,
    updatedAt: false
})