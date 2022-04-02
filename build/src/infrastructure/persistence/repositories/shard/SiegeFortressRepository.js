"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SiegeFortressRepository = void 0;
const _SiegeFortess_1 = require("../../entities/shard/_SiegeFortess");
const sequelize_1 = require("sequelize");
function SiegeFortressRepository() {
    return {
        getAllGuildOccupiedFortress: async () => await _SiegeFortess_1.SiegeFortress.findAll({
            attributes: ['FortressID', 'GuildID'],
            where: { Introduction: { [sequelize_1.Op.ne]: 'This fortress is free!' } }
        })
    };
}
exports.SiegeFortressRepository = SiegeFortressRepository;
exports.default = SiegeFortressRepository();
