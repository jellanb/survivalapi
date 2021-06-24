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
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const configSql = {
    host: 'localhost',
    database: 'SRO_VT_ACCOUNT',
    user: 'sa',
    password: 'FueraMaduro2021',
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
};
exports.sequelize = new sequelize_1.Sequelize(configSql.database, configSql.user, configSql.password, {
    host: configSql.host,
    dialect: 'mssql',
    port: 1401,
});
function initDatabase() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            yield exports.sequelize.authenticate();
            console.log('Connection has been established successfully.');
        }
        catch (e) {
            console.log('Unable to connect to the database:', e);
        }
    });
}
exports.default = initDatabase;
