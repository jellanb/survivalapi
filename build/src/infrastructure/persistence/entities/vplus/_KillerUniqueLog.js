"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillerUniqueLog = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class KillerUniqueLog extends sequelize_1.Model {
}
exports.KillerUniqueLog = KillerUniqueLog;
KillerUniqueLog.init({
    jId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'id',
        primaryKey: true
    },
    monsterId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RefMonsterID',
    },
    charId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CharID'
    },
    date: {
        type: sequelize_1.DataTypes.DATE,
        field: 'KillTime'
    }
}, {
    sequelize: moduleConnections_1.vPlusDB,
    freezeTableName: true,
    tableName: '_KillerUniqueLog',
    createdAt: false,
    updatedAt: false
});
