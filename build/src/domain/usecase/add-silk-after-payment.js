"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
async function default_1(username, silkPay, userRepository, silkRepository) {
    logger_1.default.info(`Init process to add silk to username: ${username} silk amount: ${silkPay}`);
    logger_1.default.info(`Init find username: ${username}`);
    const user = await userRepository.findUserByName(username);
    if (!user)
        throw Error(`username ${username} not exist!`);
    logger_1.default.info(`Username found: ${username}`);
    const { JID } = JSON.parse(JSON.stringify(user));
    if (!JID)
        throw Error(`JID not found`);
    logger_1.default.info(`Init find silk data with id: ${JID}`);
    const silk = await silkRepository.findById(JID);
    if (silk) {
        logger_1.default.info(`Silk data found with id: ${JID}`);
        const { silk_own } = JSON.parse(JSON.stringify(silk));
        const silkQuantity = silk_own + parseInt(silkPay);
        await silkRepository.update(JID, silkQuantity);
    }
    else {
        logger_1.default.info(`Silk data not found with id: ${JID}`);
        logger_1.default.info(`Init add silk data to user with id: ${JID} and ${silkPay}`);
        await silkRepository.add(JID, parseInt(silkPay));
        logger_1.default.info(`Finish add silk data to user with id: ${JID}`);
    }
    logger_1.default.info(`Finish process to add silk to username: ${username} silk amount adds ${silkPay}`);
}
exports.default = default_1;
