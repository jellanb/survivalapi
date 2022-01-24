"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Char = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class Char extends sequelize_1.Model {
}
exports.Char = Char;
Char.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CharID',
        primaryKey: true,
        allowNull: false
    },
    deleted: {
        type: sequelize_1.DataTypes.BOOLEAN,
        field: 'Deleted',
        defaultValue: false
    },
    refObjectId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RefObjID',
        defaultValue: 0
    },
    charName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'CharName16'
    },
    nickName: {
        type: sequelize_1.DataTypes.STRING,
        field: 'NickName'
    },
    scale: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Scale',
    },
    level: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Curlevel',
        allowNull: false,
        defaultValue: 1
    },
    maxLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MaxLevel',
        allowNull: false,
        defaultValue: 1
    },
    experience: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'ExpOffset',
        defaultValue: 0
    },
    sex: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'SExOffset',
        defaultValue: 0
    },
    strength: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Strength',
        defaultValue: 0
    },
    intellect: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Intellect',
        defaultValue: 0
    },
    remainGold: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RemainFold',
        defaultValue: 0
    },
    remainSkillPoint: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RemainSkillPoint',
        defaultValue: 0
    },
    remainStatPoint: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RemainStatPoint',
        defaultValue: 0
    },
    remainHwanCount: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'RemainHwanCount',
        defaultValue: 0
    },
    gatheredExpPoint: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GatheredExpPoint',
        defaultValue: 0
    },
    hp: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'HP',
        defaultValue: 200
    },
    mp: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MP',
        defaultValue: 200
    },
    lastedRegion: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'LastestRegion',
        defaultValue: 0
    },
    posX: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'PosX',
    },
    posY: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'PosY',
    },
    posZ: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'PosZ',
    },
    appointedTeleport: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'AppointedTeleport',
        defaultValue: 0
    },
    autoInvestExpe: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'AutoInvestExp',
        defaultValue: 1
    },
    inventorySize: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'InventorySize',
        defaultValue: 0
    },
    dailyPk: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'DailyPK',
        defaultValue: 0
    },
    totalPk: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'TotalPK',
        defaultValue: 0
    },
    pkPenaltyPoint: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'PKPenaltyPoint',
        defaultValue: 0
    },
    tpp: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'TPP',
        defaultValue: 0
    },
    penaltyForfeit: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'PenaltyForfeit',
        defaultValue: 0
    },
    jobPenaltyTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JobPenaltyTime',
        defaultValue: 0
    },
    jobLevelTrader: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JobLvl_Trader',
        defaultValue: 1
    },
    traderExperience: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Trader_Exp',
        defaultValue: 0
    },
    jobLevelHunter: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JobLvl_Trader',
        defaultValue: 1
    },
    hunterExperience: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Hunter_Exp',
        defaultValue: 0
    },
    jobLevelRobber: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JobLvl_Robber',
        defaultValue: 1
    },
    robberExperience: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Robber_Exp',
        defaultValue: 0
    },
    guildId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GuildID',
        defaultValue: 0
    },
    lastLogout: {
        type: sequelize_1.DataTypes.DATE,
        field: 'LastLogout',
    },
    telRegion: {
        type: sequelize_1.DataTypes.DATE,
        field: 'TelRegion',
        defaultValue: 0
    },
    telPosX: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'TelPosX',
        defaultValue: 0
    },
    telPosY: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'TelPosY',
        defaultValue: 0
    },
    telPosZ: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'TelPosZ',
        defaultValue: 0
    },
    deadRegion: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'DiedRegion',
        defaultValue: 0
    },
    deadPosX: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'DiedPosX',
        defaultValue: 0
    },
    deadPosY: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'DiedPosY',
        defaultValue: 0
    },
    deadPosZ: {
        type: sequelize_1.DataTypes.FLOAT,
        field: 'DiedPosZ',
        defaultValue: 0
    },
    worldId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'WorldID',
        defaultValue: 1
    },
    telWorldId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'TelWorldID',
        defaultValue: 1
    },
    deadWorldId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'DiedWorldID',
        defaultValue: 1
    },
    hwanLevel: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'HwanLevel',
        defaultValue: 0
    },
    isGm: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GM',
        defaultValue: 0
    }
}, {
    sequelize: moduleConnections_1.shardDB,
    freezeTableName: true,
    tableName: '_Char',
    createdAt: false,
    updatedAt: false
});
