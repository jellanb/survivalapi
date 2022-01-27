"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getOnlinePlayes(onlinePlayersRepository) {
    return onlinePlayersRepository.getQuantityUsersOn();
}
exports.default = getOnlinePlayes;
