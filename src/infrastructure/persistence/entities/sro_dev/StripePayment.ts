import { DataTypes, Model } from "sequelize";
import { sroDevDB } from "../../connectionManager/moduleConnections";

export class StripePayment  extends Model{}

StripePayment.init({
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        field: 'ID',
        allowNull: false
    },
    payment_intent_id:{
        type: DataTypes.STRING,
        field: 'Payment_Intent_Id',
        allowNull: false
    },
    amount:{
        type: DataTypes.INTEGER,
        field: 'Amount',
        allowNull: false
    },
    silk_intent:{
        type: DataTypes.INTEGER,
        field: 'Silk_Intent',
        allowNull: false
    },
    user_name:{
        type: DataTypes.STRING,
        field: 'User_Name',
        allowNull: false
    },
    payment_intent_date:{
        type: DataTypes.DATE,
        field: 'Payment_Intent_Date',
        allowNull: false
    },
    payment_success_date:{
        type: DataTypes.DATE,
        field: 'Payment_Success_Date'
    }
},{
    sequelize: sroDevDB,
    freezeTableName: true,
    tableName: 'StripePayment',
    createdAt: false,
    updatedAt: false
})