"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _KillerUniqueLog_1 = require("../../entities/sro_dev/_KillerUniqueLog");
const sequelize_1 = require("sequelize");
async function lastUniqueKillRepository() {
    return {
        findLastKill: async () => await _KillerUniqueLog_1.KillUnique.findAll({
            where: { CharID: { [sequelize_1.Op.not]: null } },
            limit: 1,
            order: [['KillTime', 'DESC']]
        })
    };
}
exports.default = lastUniqueKillRepository;
