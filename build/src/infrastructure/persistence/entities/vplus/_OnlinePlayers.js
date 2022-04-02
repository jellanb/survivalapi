"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePlayers = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class OnlinePlayers extends sequelize_1.Model {
}
exports.OnlinePlayers = OnlinePlayers;
OnlinePlayers.init({
    jId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JID'
    },
    charId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CharID',
    },
    charName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'CharName16'
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'UniqueID',
        primaryKey: true
    },
    jobType: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'ActiveJobType'
    },
    spawnRegionId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'SpawnRegionID'
    },
    spawnWorldId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'SpawnWorldID'
    },
    isTeleporting: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: 'IsTeleporting'
    },
    isAlive: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: 'IsAlive'
    },
    ipAddress: {
        type: sequelize_1.DataTypes.STRING,
        field: 'IPAddress'
    },
    ipPhysical: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'HWID'
    },
    lastLoginTime: {
        type: sequelize_1.DataTypes.DATE,
        field: 'LoginTime'
    },
    isUsingBot: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: 'IsUsingBot'
    },
    pcName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'PCParam_Name'
    },
    ipV6: {
        type: sequelize_1.DataTypes.STRING,
        field: 'PCParam_UUID'
    },
    pcCPU: {
        type: sequelize_1.DataTypes.STRING,
        field: 'PCParam_CPUManufacturer'
    },
    pcSerial: {
        type: sequelize_1.DataTypes.STRING,
        field: 'PCParam_VolumeSerial'
    },
    pcHWID: {
        type: sequelize_1.DataTypes.STRING,
        field: 'PCParam_HWID2'
    }
}, {
    sequelize: moduleConnections_1.vPlusDB,
    freezeTableName: true,
    tableName: '_OnlinePlayers',
    createdAt: false,
    updatedAt: false
});
