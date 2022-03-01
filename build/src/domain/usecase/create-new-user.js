"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
async function createNewUser(usersDetails, userRepository, net2eRepository) {
    logger_1.default.info(`Init create new user from web site with username:${usersDetails.username} and email:${usersDetails.email}`);
    const userExist = await userRepository.findUserByName(usersDetails.username);
    if (userExist)
        throw new Error('USER_ALREADY_EXIST');
    const userResult = await userRepository.createUser(usersDetails.username, usersDetails.email, usersDetails.password);
    const { Id } = JSON.parse(JSON.stringify(userResult));
    const net2eResult = await net2eRepository.add(Id, usersDetails.username, usersDetails.password, usersDetails.secretQuestion, usersDetails.secretAnswer);
    if (!userResult || !net2eResult)
        throw new Error('CANT_NOT_CREATE_USER');
    logger_1.default.info(`User created successfully with username:${usersDetails.username} and email:${usersDetails.email}`);
    return { username: usersDetails.username, password: usersDetails.password, email: usersDetails.email };
}
exports.default = createNewUser;
