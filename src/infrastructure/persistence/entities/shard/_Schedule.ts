import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class Schedule extends Model{}

Schedule.init({
    scheduleId: {
        type: DataTypes.INTEGER,
        field: 'ScheduleIdx',
        primaryKey: true,
        allowNull: false
    },
    scheduleDefineId:{
        type: DataTypes.INTEGER,
        field: 'ScheduleDefineIdx',
        allowNull: false
    },
    start:{
        type: DataTypes.DATE,
        field: 'DateStart',
        allowNull: false
    },
    end: {
        type: DataTypes.DATE,
        field: 'DateEnd',
        allowNull: false
    },
    mainIntervalTime: {
        type: DataTypes.INTEGER,
        field: 'MainInterval_Type',
        allowNull: false
    },
    mainIntervalDate:{
        type: DataTypes.INTEGER,
        field: 'MainInterval_TypeDate',
        allowNull: false
    },
    subInterval_DayOfWeek:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_DayOfWeek',
    },
    subInterval_Days:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_Days'
    },
    subIntervak_Weeks:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_Weeks'
    },
    subInterval_Months:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_Months'
    },
    subInterval_StartTimeHour:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_StartTimeHour'
    },
    subInterval_StartTimeMinute:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_StartTimeMinute'
    },
    subInterval_StartTimeSecond:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_StartTimeSecond'
    },
    subInterval_RepetitionTerm:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_RepetitionTerm'
    },
    subInterval_MaintainTime:{
        type: DataTypes.INTEGER,
        field: 'SubInterval_MaintainTime'
    },
    param:{
        type: DataTypes.STRING,
        field: 'Param'
    },
    description:{
        type: DataTypes.STRING,
        field: 'Description'
    }
}, {
    sequelize: shardDB,
    freezeTableName: true,
    tableName: '_Schedule',
    createdAt: false,
    updatedAt: false
})
