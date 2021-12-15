"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _KillerUniqueLog_1 = require("../../entities/sro_dev/_KillerUniqueLog");
async function lastUniqueKillRepository() {
    return {
        findLastKill: async () => await _KillerUniqueLog_1.KillUnique.findAll({
            limit: 1,
            order: [['KillTime', 'DESC']]
        })
    };
}
exports.default = lastUniqueKillRepository;
