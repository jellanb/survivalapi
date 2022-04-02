"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const email_singup_validatetions_1 = __importDefault(require("../../domain/usecase/email-singup-validatetions"));
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
async function emailValidationsController(email) {
    return await (0, email_singup_validatetions_1.default)(email, TB_UsersRepository_1.default);
}
exports.default = emailValidationsController;
