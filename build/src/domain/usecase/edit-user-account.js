"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserAccount = void 0;
const editUserAccount = async (username, password, email, nNet2eRepository, userRepository) => {
    const user = await userRepository.findUserByName(username);
    const { JID, } = JSON.parse(JSON.stringify(user));
    await userRepository.updateUserById(JID, password, email);
    await nNet2eRepository.update(JID, password);
    return { username, password, email };
};
exports.editUserAccount = editUserAccount;
