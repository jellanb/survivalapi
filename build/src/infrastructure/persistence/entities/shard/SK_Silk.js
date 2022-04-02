"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Silk = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class Silk extends sequelize_1.Model {
}
exports.Silk = Silk;
Silk.init({
    Id: {
        primaryKey: true,
        type: sequelize_1.DataTypes.INTEGER,
        field: 'JID',
        allowNull: false
    },
    SilkOwn: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'silk_own',
        allowNull: false
    },
    SilkGift: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'silk_gift',
        allowNull: false
    },
    silkPoint: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'silk_point',
        allowNull: false
    }
}, {
    sequelize: moduleConnections_1.accountDB,
    freezeTableName: true,
    tableName: 'SK_Silk',
    createdAt: false,
    updatedAt: false,
});
