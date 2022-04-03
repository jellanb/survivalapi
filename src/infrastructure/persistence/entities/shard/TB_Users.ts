import {DataTypes, Model} from 'sequelize';
import { accountDB } from '../../connectionManager/moduleConnections';

export class Users extends Model{}

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
    code:{
        type: DataTypes.STRING,
        field: 'Code',
    },
    onlineTime:{
        type: DataTypes.INTEGER,
        field: 'OnlineTimee',
    },
    palabra:{
        type: DataTypes.STRING,
        field: 'palabra',
    },
    admin:{
        type: DataTypes.INTEGER,
        field: 'Admin',
    },
    gSroOnlinee:{
        type: DataTypes.INTEGER,
        field: 'GSroOnlinee',
    },
    remembertoken:{
        type: DataTypes.STRING,
        field: 'remember_token'
    }
}, {
    sequelize: accountDB,
    freezeTableName: true,
    tableName: 'TB_User',
    createdAt: false,
    updatedAt: false
});