"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
async function AccountValidations(username, userRepository) {
    logger_1.default.info(`Init username validation to username: ${username}`);
    let userNameValidationResult = {
        isValid: false
    };
    const user = await userRepository.findUserByName(username);
    if (user)
        userNameValidationResult.isValid = true;
    logger_1.default.info(`Finish username validation to username: ${username} with result: ${userNameValidationResult.isValid}`);
    return userNameValidationResult;
}
exports.default = AccountValidations;
