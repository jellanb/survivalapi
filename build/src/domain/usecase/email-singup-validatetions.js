"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
async function EmailValidations(email, userRepository) {
    logger_1.default.info(`Init email validation to username: ${email}`);
    let emailValidationResult = {
        isValid: false
    };
    const emailResult = await userRepository.findUserByEmail(email);
    if (!emailResult)
        emailValidationResult.isValid = true;
    logger_1.default.info(`Finish username validation to username: ${email} with result: ${emailValidationResult.isValid}`);
    return emailValidationResult;
}
exports.default = EmailValidations;
