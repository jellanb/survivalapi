"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getLastUniqueKill(uniqueKillRepository, userRepository, charRepository) {
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId');
    if (!charId)
        return;
    const username = await charRepository.findCharById(charId);
    if (!username)
        return;
    return username[0];
}
exports.default = getLastUniqueKill;
