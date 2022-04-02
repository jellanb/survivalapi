"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuildRepository = void 0;
const _Guild_1 = require("../../entities/shard/_Guild");
function GuildRepository() {
    return {
        getGuildOccupiedFortressByIds: async (Id) => await _Guild_1.Guild.findOne({
            attributes: ['Name'],
            where: { ID: Id }
        })
    };
}
exports.GuildRepository = GuildRepository;
exports.default = GuildRepository();
