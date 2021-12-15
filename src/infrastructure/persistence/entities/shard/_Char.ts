import {DataTypes, Model} from "sequelize";
import {shardDB} from "../../connectionManager/moduleConnections";


export class Char extends Model{}

Char.init({
    id:{
        type: DataTypes.INTEGER,
        field: 'CharID',
        primaryKey: true,
        allowNull: false
    },
    deleted:{
        type: DataTypes.BOOLEAN,
        field: 'Deleted',
        defaultValue: false
    },
    refObjectId:{
        type: DataTypes.INTEGER,
        field: 'RefObjID',
        defaultValue: 0
    },
    charName:{
        type: DataTypes.STRING,
        field: 'CharName16'
    },
    nickName:{
        type: DataTypes.STRING,
        field: 'NickName'
    },
    scale:{
        type: DataTypes.INTEGER,
        field: 'Scale',
    },
    level:{
        type: DataTypes.INTEGER,
        field: 'Curlevel',
        allowNull: false,
        defaultValue: 1
    },
    maxLevel:{
        type: DataTypes.INTEGER,
        field: 'MaxLevel',
        allowNull: false,
        defaultValue: 1
    },
    experience:{
        type: DataTypes.INTEGER,
        field: 'ExpOffset',
        defaultValue: 0
    },
    sex:{
        type: DataTypes.INTEGER,
        field: 'SExOffset',
        defaultValue: 0
    },
    strength:{
        type: DataTypes.INTEGER,
        field: 'Strength',
        defaultValue: 0
    },
    intellect:{
        type: DataTypes.INTEGER,
        field: 'Intellect',
        defaultValue: 0
    },
    remainGold:{
        type: DataTypes.INTEGER,
        field: 'RemainFold',
        defaultValue: 0
    },
    remainSkillPoint:{
        type: DataTypes.INTEGER,
        field: 'RemainSkillPoint',
        defaultValue: 0
    },
    remainStatPoint:{
        type: DataTypes.INTEGER,
        field: 'RemainStatPoint',
        defaultValue: 0
    },
    remainHwanCount:{
        type: DataTypes.INTEGER,
        field: 'RemainHwanCount',
        defaultValue: 0
    },
    gatheredExpPoint:{
        type: DataTypes.INTEGER,
        field: 'GatheredExpPoint',
        defaultValue: 0
    },
    hp:{
        type: DataTypes.INTEGER,
        field: 'HP',
        defaultValue: 200
    },
    mp: {
        type: DataTypes.INTEGER,
        field: 'MP',
        defaultValue: 200
    },
    lastedRegion:{
        type: DataTypes.INTEGER,
        field: 'LastestRegion',
        defaultValue: 0
    },
    posX:{
        type: DataTypes.FLOAT,
        field: 'PosX',
    },
    posY:{
        type: DataTypes.FLOAT,
        field: 'PosY',
    },
    posZ:{
        type: DataTypes.FLOAT,
        field: 'PosZ',
    },
    appointedTeleport:{
        type: DataTypes.INTEGER,
        field: 'AppointedTeleport',
        defaultValue: 0
    },
    autoInvestExpe: {
        type: DataTypes.INTEGER,
        field: 'AutoInvestExp',
        defaultValue: 1
    },
    inventorySize:{
        type: DataTypes.INTEGER,
        field: 'InventorySize',
        defaultValue:0
    },
    dailyPk:{
        type: DataTypes.INTEGER,
        field: 'DailyPK',
        defaultValue: 0
    },
    totalPk:{
        type: DataTypes.INTEGER,
        field: 'TotalPK',
        defaultValue: 0
    },
    pkPenaltyPoint:{
        type: DataTypes.INTEGER,
        field: 'PKPenaltyPoint',
        defaultValue: 0
    },
    tpp:{
        type: DataTypes.INTEGER,
        field: 'TPP',
        defaultValue: 0
    },
    penaltyForfeit:{
        type: DataTypes.INTEGER,
        field: 'PenaltyForfeit',
        defaultValue: 0
    },
    jobPenaltyTime:{
        type: DataTypes.INTEGER,
        field: 'JobPenaltyTime',
        defaultValue: 0
    },
    jobLevelTrader:{
        type: DataTypes.INTEGER,
        field: 'JobLvl_Trader',
        defaultValue: 1
    },
    traderExperience:{
        type: DataTypes.INTEGER,
        field: 'Trader_Exp',
        defaultValue: 0
    },
    jobLevelHunter:{
        type: DataTypes.INTEGER,
        field: 'JobLvl_Trader',
        defaultValue: 1
    },
    hunterExperience:{
        type: DataTypes.INTEGER,
        field: 'Hunter_Exp',
        defaultValue: 0
    },
    jobLevelRobber:{
        type: DataTypes.INTEGER,
        field: 'JobLvl_Robber',
        defaultValue: 1
    },
    robberExperience:{
        type: DataTypes.INTEGER,
        field: 'Robber_Exp',
        defaultValue: 0
    },
    guildId:{
        type: DataTypes.INTEGER,
        field: 'GuildID',
        defaultValue: 0
    },
    lastLogout:{
        type: DataTypes.DATE,
        field: 'LastLogout',
    },
    telRegion:{
        type: DataTypes.DATE,
        field: 'TelRegion',
        defaultValue: 0
    },
    telPosX:{
        type: DataTypes.FLOAT,
        field: 'TelPosX',
        defaultValue: 0
    },
    telPosY:{
        type: DataTypes.FLOAT,
        field: 'TelPosY',
        defaultValue: 0
    },
    telPosZ:{
        type: DataTypes.FLOAT,
        field: 'TelPosZ',
        defaultValue: 0
    },
    deadRegion:{
        type: DataTypes.INTEGER,
        field: 'DiedRegion',
        defaultValue: 0
    },
    deadPosX:{
        type: DataTypes.FLOAT,
        field: 'DiedPosX',
        defaultValue: 0
    },
    deadPosY:{
        type: DataTypes.FLOAT,
        field: 'DiedPosY',
        defaultValue: 0
    },
    deadPosZ:{
        type: DataTypes.FLOAT,
        field: 'DiedPosZ',
        defaultValue: 0
    },
    worldId:{
        type: DataTypes.INTEGER,
        field: 'WorldID',
        defaultValue: 1
    },
    telWorldId:{
        type: DataTypes.INTEGER,
        field: 'TelWorldID',
        defaultValue: 1
    },
    deadWorldId:{
        type: DataTypes.INTEGER,
        field: 'DiedWorldID',
        defaultValue: 1
    },
    hwanLevel:{
        type: DataTypes.INTEGER,
        field: 'HwanLevel',
        defaultValue: 0
    },
    isGm:{
        type: DataTypes.INTEGER,
        field: 'GM',
        defaultValue: 0
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_Char',
    createdAt: false,
    updatedAt: false
})
