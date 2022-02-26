"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class Users extends sequelize_1.Model {
}
exports.Users = Users;
Users.init({
    Id: {
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JID'
    },
    strUserId: {
        type: sequelize_1.DataTypes.STRING,
        field: 'StrUserID',
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Status'
    },
    gmRank: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GMRank'
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Name',
    },
    email: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Email',
    },
    sex: {
        type: sequelize_1.DataTypes.STRING,
        field: 'sex'
    },
    certificateNum: {
        type: sequelize_1.DataTypes.STRING,
        field: 'certificate_num'
    },
    address: {
        type: sequelize_1.DataTypes.STRING,
    },
    postcode: {
        type: sequelize_1.DataTypes.STRING
    },
    phone: {
        type: sequelize_1.DataTypes.STRING
    },
    mobile: {
        type: sequelize_1.DataTypes.STRING
    },
    regTime: {
        type: sequelize_1.DataTypes.DATE,
        field: 'regtime'
    },
    regIp: {
        type: sequelize_1.DataTypes.STRING,
        field: 'reg_ip'
    },
    timeLog: {
        type: sequelize_1.DataTypes.DATE,
        field: 'Time_log'
    },
    freeTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'freetime'
    },
    secPrimary: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'sec_primary',
        allowNull: false
    },
    secContent: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'sec_content',
        allowNull: false
    },
    accPlayTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'AccPlayTime',
        allowNull: false
    },
    latestUpdateTimeToPlayTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'LatestUpdateTime_ToPlayTime',
        allowNull: false
    },
    code: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Code',
    },
    onlineTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'OnlineTimee',
    },
    palabra: {
        type: sequelize_1.DataTypes.STRING,
        field: 'palabra',
    },
    admin: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Admin',
    },
    gSroOnlinee: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'GSroOnlinee',
    },
    remembertoken: {
        type: sequelize_1.DataTypes.STRING,
        field: 'remember_token'
    }
}, {
    sequelize: moduleConnections_1.accountDB,
    freezeTableName: true,
    tableName: 'TB_User',
    createdAt: false,
    updatedAt: false
});
