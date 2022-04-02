"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const login_user_1 = require("../../domain/usecase/login-user");
const Net2eRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/Net2eRepository"));
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
const SilkRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/SilkRepository"));
async function loginUserController(username, password) {
    return await (0, login_user_1.LoginUser)(username, password, Net2eRepository_1.default, TB_UsersRepository_1.default, SilkRepository_1.default);
}
exports.default = loginUserController;
