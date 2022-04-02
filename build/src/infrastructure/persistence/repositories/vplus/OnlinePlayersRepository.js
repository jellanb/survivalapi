"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OnlinePlayersRepository = void 0;
const _OnlinePlayers_1 = require("../../entities/vplus/_OnlinePlayers");
function OnlinePlayersRepository() {
    return {
        getQuantityUsersOn: async () => await _OnlinePlayers_1.OnlinePlayers.count()
    };
}
exports.OnlinePlayersRepository = OnlinePlayersRepository;
exports.default = OnlinePlayersRepository();
