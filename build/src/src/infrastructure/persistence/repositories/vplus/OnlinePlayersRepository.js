"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _OnlinePlayers_1 = require("../../entities/vplus/_OnlinePlayers");
async function onlinePlayersRepository() {
    return {
        getQuantityUsersOn: async () => await _OnlinePlayers_1.OnlinePlayers.count()
    };
}
exports.default = onlinePlayersRepository;
