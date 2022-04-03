import { DataTypes, Model } from "sequelize";
import { accountDB } from "../../connectionManager/moduleConnections";

export class Net2e extends Model{}

Net2e.init({
    Id:{
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
    secondPassword:{
        type: DataTypes.STRING,
    },
    question:{
        type: DataTypes.STRING,
    },
    answer:{
        type: DataTypes.STRING
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
    mdk:{
        type: DataTypes.STRING,
        field: 'MDK'
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
    cid:{
        type: DataTypes.STRING,
    },
    cidType:{
        type: DataTypes.INTEGER
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
    Province:{
        type: DataTypes.STRING
    },
    District:{
        type: DataTypes.STRING
    },
    wherePlay:{
        type: DataTypes.STRING,
        field: 'WherePlay'
    },
    whereKnow:{
        type: DataTypes.STRING,
        field: 'WhereKnow'
    },
    reference:{
        type: DataTypes.STRING,
        field: 'Reference'
    },
    game:{
        type: DataTypes.STRING,
        field: 'Games'
    },
    strLevel:{
        type: DataTypes.STRING
    },
    class:{
        type: DataTypes.STRING,
        field: 'Class'
    },
    howPlay:{
        type: DataTypes.INTEGER,
        field: 'HowPlay'
    },
    inviter:{
        type: DataTypes.INTEGER,
        field: 'Inviter'
    },
    secAct:{
        type: DataTypes.STRING,
        field: 'Sec_act'
    },
    lasModification: {
        type: DataTypes.DATE,
        field: 'LastModification'
    }
}, {
    sequelize: accountDB,
    freezeTableName: true,
    tableName: 'TB_Net2e',
    createdAt: false,
    updatedAt: false
});