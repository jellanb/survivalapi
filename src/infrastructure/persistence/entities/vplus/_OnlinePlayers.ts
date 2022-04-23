import { DataTypes, Model } from "sequelize";
import { vPlusDB } from "../../connectionManager/moduleConnections";

export class OnlinePlayers extends Model{}

OnlinePlayers.init({
    jId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        field: 'JID'
    },
    charId: {
        type: DataTypes.INTEGER,
        field: 'CharID',
    },
    charName: {
        type: DataTypes.STRING,
        field: 'CharName16'
    },
    id: {
        type: DataTypes.INTEGER,
        field: 'UniqueID'
    },
    jobType:{
        type: DataTypes.INTEGER,
        field: 'ActiveJobType'
    },
    spawnRegionId:{
        type: DataTypes.INTEGER,
        field: 'SpawnRegionID'
    },
    spawnWorldId:{
        type: DataTypes.INTEGER,
        field: 'SpawnWorldID'
    },
    isTeleporting:{
        type: DataTypes.BOOLEAN,
        field: 'IsTeleporting'
    },
    isAlive:{
        type: DataTypes.BOOLEAN,
        field: 'IsAlive'
    },
    ipAddress:{
        type: DataTypes.STRING,
        field: 'IPAddress'
    },
    ipPhysical:{
        type: DataTypes.INTEGER,
        field: 'HWID'
    },
    lastLoginTime:{
        type: DataTypes.DATE,
        field: 'LoginTime'
    },
    isUsingBot:{
        type:DataTypes.BOOLEAN,
        field: 'IsUsingBot'
    },
    pcName:{
        type: DataTypes.STRING,
        field: 'PCParam_Name'
    },
    ipV6:{
        type: DataTypes.STRING,
        field: 'PCParam_UUID'
    },
    pcCPU:{
        type: DataTypes.STRING,
        field: 'PCParam_CPUManufacturer'
    },
    pcSerial:{
        type: DataTypes.STRING,
        field: 'PCParam_VolumeSerial'
    },
    pcHWID:{
        type: DataTypes.STRING,
        field: 'PCParam_HWID2'
    }
}, {
    sequelize: vPlusDB,
    freezeTableName: true,
    tableName: '_OnlinePlayers',
    createdAt: false,
    updatedAt: false
})