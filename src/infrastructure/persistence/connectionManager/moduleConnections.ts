import {Sequelize} from "sequelize";
import dotenv from 'dotenv';
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

export const accountDB = new Sequelize(accountConfig.database, accountConfig.user, accountConfig.password, {
    host: accountConfig.host,
    dialect: 'mssql',
    port: 1433,
});

export const sroDevDB = new Sequelize(sroDevConfig.database, sroDevConfig.user, sroDevConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
});

export const shardDB = new Sequelize(shardConfig.database, shardConfig.user, shardConfig.password, {
    host: sroDevConfig.host,
    dialect: 'mssql',
    port: 1433,
});

export default async function initDatabase() {
    try{
        await accountDB.authenticate();
        await sroDevDB.authenticate();
        await shardDB.authenticate();
        console.log('All connection has been established successfully.');
    } catch (e) {
        console.log(`Unable to connect to the database: ${e.message}`);
    }
}
