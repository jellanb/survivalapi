"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountJID = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class AccountJID extends sequelize_1.Model {
}
exports.AccountJID = AccountJID;
AccountJID.init({
    account: {
        type: sequelize_1.DataTypes.STRING,
        field: 'AccountID',
        allowNull: false,
        primaryKey: true
    },
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JID',
        allowNull: false
    },
    gold: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Gold',
        allowNull: false,
    }
}, {
    sequelize: moduleConnections_1.shardDB,
    freezeTableName: true,
    tableName: '_AccountJID',
    createdAt: false,
    updatedAt: false
});
