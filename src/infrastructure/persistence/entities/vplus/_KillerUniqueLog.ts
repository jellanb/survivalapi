import { DataTypes, Model } from 'sequelize';
import { vPlusDB } from '../../connectionManager/moduleConnections';

export class KillerUniqueLog extends Model{}

KillerUniqueLog.init({
    jId: {
        type: DataTypes.INTEGER,
        field: 'id',
        primaryKey: true
    },
    monsterId:{
        type: DataTypes.INTEGER,
        field: 'RefMonsterID',
    },
    charId:{
        type: DataTypes.INTEGER,
        field:'CharID'
    },
    date:{
        type: DataTypes.DATE,
        field: 'KillTime'
    }
    }, {
        sequelize: vPlusDB,
        freezeTableName: true,
        tableName: '_KillerUniqueLog',
        createdAt: false,
        updatedAt: false
    })
