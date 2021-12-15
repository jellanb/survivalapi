"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserAndChar = void 0;
const sequelize_1 = require("sequelize");
const moduleConnections_1 = require("../../connectionManager/moduleConnections");
class UserAndChar extends sequelize_1.Model {
}
exports.UserAndChar = UserAndChar;
UserAndChar.init({
    userId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'UserJID',
        allowNull: false
    },
    charId: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'CharID',
        allowNull: false
    }
}, {
    sequelize: moduleConnections_1.shardDB,
    freezeTableName: true,
    tableName: '_User',
    createdAt: false,
    updatedAt: false
});
