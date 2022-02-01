import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class Guild extends Model{}

Guild.init({
    id:{
        type: DataTypes.INTEGER,
        field: 'ID',
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        field: 'Name',
        allowNull: false
    },
    nivel:{
        type: DataTypes.INTEGER,
        field: 'Lvl',
        allowNull: false
    },
    gateredSp:{
        type: DataTypes.INTEGER,
        field: 'GatheredSP',
        allowNull: false
    },
    fundationTime:{
        type: DataTypes.DATE,
        field: 'FoundationDate',
        allowNull: false
    },
    alliance:{
        type: DataTypes.INTEGER,
        field: 'Alliance'
    },
    masterTitle:{
        type: DataTypes.STRING,
        field: 'MasterCommentTitle'
    },
    masterComment:{
        type: DataTypes.STRING,
        field: 'MasterComment'
    },
    booty:{
        type: DataTypes.INTEGER,
        field: 'Booty',
        allowNull: false
    },
    gold:{
        type: DataTypes.INTEGER,
        field: 'Gold',
        allowNull: false
    },
    lastCrestRev:{
        type: DataTypes.INTEGER,
        field: 'LastCrestRev',
        allowNull: false
    },
    currentCrestRev:{
        type: DataTypes.INTEGER,
        field: 'CurCrestvRev'
    },
    mercenaryAttr:{
        type: DataTypes.INTEGER,
        field: 'MercenaryAttr',
        allowNull: false
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_Guild',
    createdAt: false,
    updatedAt: false
})
