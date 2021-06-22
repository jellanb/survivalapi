import { Sequelize, DataTypes, Model } from 'sequelize'
import fs from 'fs';

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

const sequelize = new Sequelize(configSql.database, configSql.user, configSql.password, {
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

class Users extends Model{}

Users.init({
    Id:{
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'JID'
    },
    strUserId: {
        type: DataTypes.STRING,
        field: 'StrUserID',
        allowNull: false
    },
    password:{
        type: DataTypes.STRING,
        allowNull: false
    },
    status:{
        type: DataTypes.INTEGER,
        field: 'Status'
    },
    gmRank:{
        type: DataTypes.INTEGER,
        field: 'GMRank'
    },
    name:{
        type: DataTypes.STRING,
        field: 'Name',
    },
    email:{
        type: DataTypes.INTEGER,
        field: 'Email',
    },
    sex:{
        type: DataTypes.STRING,
        field: 'sex'
    },
    certificateNum:{
        type: DataTypes.STRING,
        field: 'certificate_num'
    },
    address:{
        type: DataTypes.STRING,
    },
    postcode:{
        type : DataTypes.STRING
    },
    phone:{
        type: DataTypes.STRING
    },
    mobile:{
        type: DataTypes.STRING
    },
    regTime:{
        type: DataTypes.DATE,
        field: 'regtime'
    },
    regIp:{
        type: DataTypes.STRING,
        field: 'reg_ip'
    },
    timeLog:{
        type: DataTypes.DATE,
        field: 'Time_log'
    },
    freeTime:{
        type: DataTypes.INTEGER,
        field: 'freetime'
    },
    secPrimary:{
        type: DataTypes.INTEGER,
        field: 'sec_primary',
        allowNull: false
    },
    secContent: {
        type: DataTypes.INTEGER,
        field: 'sec_content',
        allowNull: false
    },
    accPlayTime:{
        type: DataTypes.INTEGER,
        field: 'AccPlayTime',
        allowNull: false
    },
    latestUpdateTimeToPlayTime:{
        type: DataTypes.INTEGER,
        field: 'LatestUpdateTime_ToPlayTime',
        allowNull: false
    },
    playTime:{
        type: DataTypes.INTEGER,
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



export const findByName = async (name: string) =>{
    await initDatabase();
    try{
        const result = await Users.findAll({
            attributes: ['StrUserId'],
            where: { strUserId: name }
        });
        return result[0];
    } catch (e) {
        console.log(e);
    }
}

export const findByEmail = async (email: string) =>{
    await initDatabase();
    try{
        const result = await Users.findAll({
            attributes: ['Email'],
            where: { email: email }
        });
        return result[0];
    } catch (e) {
        console.log(e);
    }
}

export const createUser = async (firstName: string, lastName: string, email: string, pass: string) => {
    try {
        const newUserResult = await Users.create({
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
    } catch (e) {
        console.log(e);
    }

}
