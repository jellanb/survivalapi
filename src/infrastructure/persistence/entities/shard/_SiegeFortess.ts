import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';
import {allow} from "joi";

export class SiegeFortress extends Model{}

SiegeFortress.init({
    fortressId:{
        type: DataTypes.INTEGER,
        field: 'FortressID',
        allowNull: false,
        primaryKey: true
    },
    guildId:{
        type: DataTypes.INTEGER,
        field: 'GuildID',
        allowNull:false
    },
    taxRatio:{
        type: DataTypes.INTEGER,
        field: 'TaxRatio',
        allowNull: false
    },
    tax:{
        type: DataTypes.INTEGER,
        field: 'Tax',
        allowNull: false
    },
    npcHired:{
        type: DataTypes.INTEGER,
        field: 'NPCHired',
        allowNull: false
    },
    tempGuildId:{
        type: DataTypes.INTEGER,
        field: 'TempGuildID',
        allowNull: false
    },
    introduction:{
        type: DataTypes.STRING,
        field: 'Introduction'
    },
    createdDungeonTime:{
        type: DataTypes.DATE,
        field: 'CreatedDungeonTime'
    },
    createdDungeonCount:{
        type: DataTypes.INTEGER,
        field: 'CreatedDungeonCount'
    },
    permission:{
        type: DataTypes.INTEGER,
        field: 'IntroductionModificationPermission',
        allowNull: false
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_SiegeFortress',
    createdAt: false,
    updatedAt: false
})
