"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
async function getLastUniqueKill(uniqueKillRepository, userRepository, accountRepository) {
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId');
    const userId = await userRepository.findUserById(charId);
    if (!userId)
        return;
    const username = await accountRepository.findAccountById(userId[0].getDataValue('UserJID'));
    if (!username)
        return;
    return username[0];
}
exports.default = getLastUniqueKill;
