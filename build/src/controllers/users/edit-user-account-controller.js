"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const edit_user_account_1 = require("../../domain/usecase/edit-user-account");
const Net2eRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/Net2eRepository"));
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
async function EditUserAccountController(username, password, email) {
    return await (0, edit_user_account_1.editUserAccount)(username, password, email, Net2eRepository_1.default, TB_UsersRepository_1.default);
}
exports.default = EditUserAccountController;
