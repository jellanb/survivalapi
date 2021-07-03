import {Sequelize} from "sequelize";

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
}

export const sequelize = new Sequelize(configSql.database, configSql.user, configSql.password, {
    host: configSql.host,
    dialect: 'mssql',
    port: 1433,
});

export default async function initDatabase() {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (e) {
        console.log('Unable to connect to the database:', e);
    }
}
