"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TB_UsersRepository_1 = require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository");
const Net2eRepository_1 = require("../../infrastructure/persistence/repositories/shard/Net2eRepository");
async function createNewUser(usersDetails) {
    const userExist = await TB_UsersRepository_1.findUserByName(usersDetails.username);
    if (userExist)
        throw new Error('USER_ALREADY_EXIST');
    const userResult = await TB_UsersRepository_1.createUser(usersDetails.username, usersDetails.email, usersDetails.password);
    const { Id } = JSON.parse(JSON.stringify(userResult));
    const net2eResult = await Net2eRepository_1.addNet2e(Id, usersDetails.username, usersDetails.password, usersDetails.secretQuestion, usersDetails.secretAnswer);
    if (!userResult || !net2eResult)
        throw new Error('CANT_NOT_CREATE_USER');
    return { username: usersDetails.username, password: usersDetails.password, email: usersDetails.email };
}
exports.default = createNewUser;
