"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Net2e = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class Net2e extends sequelize_1.Model {
}
exports.Net2e = Net2e;
Net2e.init({
    Id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JID'
    },
    strUserId: {
        type: sequelize_1.DataTypes.STRING,
        field: 'StrUserID',
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    secondPassword: {
        type: sequelize_1.DataTypes.STRING,
    },
    question: {
        type: sequelize_1.DataTypes.STRING,
    },
    answer: {
        type: sequelize_1.DataTypes.STRING
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
    mdk: {
        type: sequelize_1.DataTypes.STRING,
        field: 'MDK'
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
    cid: {
        type: sequelize_1.DataTypes.STRING,
    },
    cidType: {
        type: sequelize_1.DataTypes.INTEGER
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
    Province: {
        type: sequelize_1.DataTypes.STRING
    },
    District: {
        type: sequelize_1.DataTypes.STRING
    },
    wherePlay: {
        type: sequelize_1.DataTypes.STRING,
        field: 'WherePlay'
    },
    whereKnow: {
        type: sequelize_1.DataTypes.STRING,
        field: 'WhereKnow'
    },
    reference: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Reference'
    },
    game: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Games'
    },
    strLevel: {
        type: sequelize_1.DataTypes.STRING
    },
    class: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Class'
    },
    howPlay: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'HowPlay'
    },
    inviter: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Inviter'
    },
    secAct: {
        type: sequelize_1.DataTypes.STRING,
        field: 'Sec_act'
    },
    lasModification: {
        type: sequelize_1.DataTypes.DATE,
        field: 'LastModification'
    }
}, {
    sequelize: moduleConnections_1.accountDB,
    freezeTableName: true,
    tableName: 'TB_Net2e',
    createdAt: false,
    updatedAt: false
});
