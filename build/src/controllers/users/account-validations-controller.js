"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
const account_singup_validations_1 = __importDefault(require("../../domain/usecase/account-singup-validations"));
async function AccountValidationsController(username) {
    return await (0, account_singup_validations_1.default)(username, TB_UsersRepository_1.default);
}
exports.default = AccountValidationsController;
