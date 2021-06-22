"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = exports.findByEmail = exports.findByName = void 0;
const sequelize_1 = require("sequelize");
const configSql = {
    host: 'localhost',
    database: 'SRO_VT_ACCOUNT',
    user: 'sa',
    password: 'FueraMaduro2021'
};
const sequelize = new sequelize_1.Sequelize(configSql.database, configSql.user, configSql.password, {
    host: configSql.host,
    dialect: 'mssql',
    port: 1401,
});
function initDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (e) {
            console.log('Unable to connect to the database:', e);
        }
    });
}
exports.default = initDatabase;
class Users extends sequelize_1.Model {
}
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
        allowNull: false
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
    playTime: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Play123Time',
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    tableName: 'TB_User',
    createdAt: false,
    updatedAt: false
});
const findByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    yield initDatabase();
    try {
        const result = yield Users.findAll({
            attributes: ['StrUserId'],
            where: { strUserId: name }
        });
        return result[0];
    }
    catch (e) {
        console.log(e);
    }
});
exports.findByName = findByName;
const findByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    yield initDatabase();
    try {
        const result = yield Users.findAll({
            attributes: ['Email'],
            where: { email: email }
        });
        return result[0];
    }
    catch (e) {
        console.log(e);
    }
});
exports.findByEmail = findByEmail;
const createUser = (firstName, lastName, email, pass) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserResult = yield Users.create({
            strUserId: firstName,
            password: pass,
            name: firstName + lastName,
            email: email,
            secPrimary: 3,
            secContent: 3,
            accPlayTime: 0,
            latestUpdateTimeToPlayTime: 0,
            playTime: 0
        });
        console.log('User add successfully!');
        return newUserResult;
    }
    catch (e) {
        console.log(e);
    }
});
exports.createUser = createUser;
