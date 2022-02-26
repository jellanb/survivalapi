"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiegeFortress = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class SiegeFortress extends sequelize_1.Model {
}
exports.SiegeFortress = SiegeFortress;
SiegeFortress.init({
    fortressId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'FortressID',
        allowNull: false,
        primaryKey: true
    },
    guildId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GuildID',
        allowNull: false
    },
    taxRatio: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'TaxRatio',
        allowNull: false
    },
    tax: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Tax',
        allowNull: false
    },
    npcHired: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'NPCHired',
        allowNull: false
    },
    tempGuildId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'TempGuildID',
        allowNull: false
    },
    introduction: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Introduction'
    },
    createdDungeonTime: {
        type: sequelize_1.DataTypes.DATE,
        field: 'CreatedDungeonTime'
    },
    createdDungeonCount: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CreatedDungeonCount'
    },
    permission: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'IntroductionModificationPermission',
        allowNull: false
    }
}, {
    sequelize: moduleConnections_1.shardDB,
    freezeTableName: true,
    tableName: '_SiegeFortress',
    createdAt: false,
    updatedAt: false
});
