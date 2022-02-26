"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.vPlusDB = exports.shardDB = exports.sroDevDB = exports.accountDB = void 0;
const sequelize_1 = require("sequelize");
const dotenv_1 = __importDefault(require("dotenv"));
const logger_1 = __importDefault(require("../../observability/logging/logger"));
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
const vPlusConfig = {
    host: process.env['databaseHost'],
    database: process.env['databaseVPlus'],
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
exports.vPlusDB = new sequelize_1.Sequelize(vPlusConfig.database, vPlusConfig.user, vPlusConfig.password, {
    host: vPlusConfig.host,
    dialect: 'mssql',
    port: 1433,
});
async function initDatabase() {
    try {
        await exports.accountDB.authenticate();
        await exports.sroDevDB.authenticate();
        await exports.shardDB.authenticate();
        await exports.vPlusDB.authenticate();
        (0, logger_1.default)().info('All connection has been established successfully.');
    }
    catch (connectionFailure) {
        (0, logger_1.default)().error(`Unable to connect to the database: ${connectionFailure}`);
    }
}
exports.default = initDatabase;
