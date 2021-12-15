"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_last_unique_kill_1 = __importDefault(require("../../domain/usecase/get-last-unique-kill"));
const KillUniqueRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository"));
const UserRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/UserRepository"));
const AccountJidRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/AccountJidRepository"));
async function lastUniqueKillController() {
    try {
        const lastKillResult = await (0, get_last_unique_kill_1.default)(await (0, KillUniqueRepository_1.default)(), await (0, UserRepository_1.default)(), await (0, AccountJidRepository_1.default)());
        return lastKillResult;
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = lastUniqueKillController;