import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
import SurvivalLogger from "../../observability/logging/logger";
dotenv.config();

const accountConfig = {
    host: process.env['databaseHost']!,
    database: process.env['databaseAccount']!,
    user: process.env['databaseUser']!,
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

const sroDevConfig = {
    host: process.env['databaseHost']!,
    database: process.env['databaseDev']!,
    user: process.env['databaseUser']!,
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

const shardConfig = {
    host: process.env['databaseHost']!,
    database: process.env['databaseShard']!,
    user: process.env['databaseUser']!,
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

const vPlusConfig = {
    host: process.env['databaseHost']!,
    database: process.env['databaseVPlus']!,
    user: process.env['databaseUser']!,
    password: process.env['databasePassword'],
    options: {
        cryptoCredentialsDetails: {
            minVersion: 'TLSv1'
        }
    }
}

export const accountDB = new Sequelize(accountConfig.database, accountConfig.user, accountConfig.password, {
    host: accountConfig.host,
    dialect: 'mssql',
    port: 1433,
    logging: false
});

export const sroDevDB = new Sequelize(sroDevConfig.database, sroDevConfig.user, sroDevConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
    logging: false
});

export const shardDB = new Sequelize(shardConfig.database, shardConfig.user, shardConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
    logging: false
});

export const vPlusDB = new Sequelize(vPlusConfig.database, vPlusConfig.user, vPlusConfig.password, {
    host: vPlusConfig.host,
    dialect: 'mssql',
    port: 1433,
    logging: false
});

export default async function initDatabase() {
    try{
        await accountDB.authenticate();
        await sroDevDB.authenticate();
        await shardDB.authenticate();
        await vPlusDB.authenticate();
        SurvivalLogger.info('All connection has been established successfully.');
    } catch (connectionFailure) {
        SurvivalLogger.error(`Unable to connect to the database: ${connectionFailure}`)
    }
}
