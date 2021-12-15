"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillUnique = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class KillUnique extends sequelize_1.Model {
}
exports.KillUnique = KillUnique;
KillUnique.init({
    id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'id'
    },
    mosterId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RefMonsterId',
    },
    charId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CharId'
    },
    killData: {
        type: sequelize_1.DataTypes.DATE,
        field: 'KillTime'
    }
}, {
    sequelize: moduleConnections_1.sroDevDB,
    freezeTableName: true,
    tableName: '_KillerUniqueLog',
    createdAt: false,
    updatedAt: false
});
