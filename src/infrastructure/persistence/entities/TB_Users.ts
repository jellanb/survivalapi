import {DataTypes, Model} from "sequelize";
import { sequelize } from "../../../database";

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

