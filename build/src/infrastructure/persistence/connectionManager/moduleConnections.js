"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.shardDB = exports.sroDevDB = exports.accountDB = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const accountConfig = {
    host: process.env['databaseHost'],
    database: process.env['databaseAccount'],
    user: process.env['databaseUser'],
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
};
const sroDevConfig = {
    host: process.env['databaseHost'],
    database: process.env['databaseDev'],
    user: process.env['databaseUser'],
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
};
const shardConfig = {
    host: process.env['databaseHost'],
    database: process.env['databaseShard'],
    user: process.env['databaseUser'],
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
};
exports.accountDB = new sequelize_1.Sequelize(accountConfig.database, accountConfig.user, accountConfig.password, {
    host: accountConfig.host,
    dialect: 'mssql',
    port: 1433,
});
exports.sroDevDB = new sequelize_1.Sequelize(sroDevConfig.database, sroDevConfig.user, sroDevConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
});
exports.shardDB = new sequelize_1.Sequelize(shardConfig.database, shardConfig.user, shardConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
});
async function initDatabase() {
    try {
        await exports.accountDB.authenticate();
        await exports.sroDevDB.authenticate();
        await exports.shardDB.authenticate();
        console.log('All connection has been established successfully.');
    }
    catch (e) {
        console.log(`Unable to connect to the database: ${e}`);
    }
}
exports.default = initDatabase;
