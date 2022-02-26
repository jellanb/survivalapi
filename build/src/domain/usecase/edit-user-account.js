"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.editUserAccount = void 0;
const TB_UsersRepository_1 = require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository");
const Net2eRepository_1 = require("../../infrastructure/persistence/repositories/shard/Net2eRepository");
const editUserAccount = async (username, password, email) => {
    try {
        const user = await (0, TB_UsersRepository_1.findUserByName)(username);
        const { JID, } = JSON.parse(JSON.stringify(user));
        await (0, TB_UsersRepository_1.updateUserById)(JID, password, email);
        await (0, Net2eRepository_1.updateNet2eById)(JID, password);
        return { username, password, email };
    }
    catch (e) {
        console.log(e);
    }
};
exports.editUserAccount = editUserAccount;
