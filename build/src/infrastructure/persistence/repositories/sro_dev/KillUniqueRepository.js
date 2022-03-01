"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.KillUniqueRepository = void 0;
const _KillerUniqueLog_1 = require("../../entities/sro_dev/_KillerUniqueLog");
const sequelize_1 = require("sequelize");
function KillUniqueRepository() {
    return {
        findLastKill: async () => await _KillerUniqueLog_1.KillUnique.findAll({
            where: { CharID: { [sequelize_1.Op.not]: null } },
            limit: 1,
            order: [['KillTime', 'DESC']]
        })
    };
}
exports.KillUniqueRepository = KillUniqueRepository;
exports.default = KillUniqueRepository();
