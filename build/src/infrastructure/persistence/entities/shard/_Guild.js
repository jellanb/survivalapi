"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Guild = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class Guild extends sequelize_1.Model {
}
exports.Guild = Guild;
Guild.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'ID',
        primaryKey: true,
        allowNull: false
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Name',
        allowNull: false
    },
    nivel: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Lvl',
        allowNull: false
    },
    gateredSp: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GatheredSP',
        allowNull: false
    },
    fundationTime: {
        type: sequelize_1.DataTypes.DATE,
        field: 'FoundationDate',
        allowNull: false
    },
    alliance: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Alliance'
    },
    masterTitle: {
        type: sequelize_1.DataTypes.STRING,
        field: 'MasterCommentTitle'
    },
    masterComment: {
        type: sequelize_1.DataTypes.STRING,
        field: 'MasterComment'
    },
    booty: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Booty',
        allowNull: false
    },
    gold: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Gold',
        allowNull: false
    },
    lastCrestRev: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'LastCrestRev',
        allowNull: false
    },
    currentCrestRev: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CurCrestvRev'
    },
    mercenaryAttr: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MercenaryAttr',
        allowNull: false
    }
}, {
    sequelize: moduleConnections_1.shardDB,
    freezeTableName: true,
    tableName: '_Guild',
    createdAt: false,
    updatedAt: false
});
