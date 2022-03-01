"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoadInformationController = void 0;
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
const KillUniqueRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/sro_dev/KillUniqueRepository"));
const UserRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/UserRepository"));
const _ShardRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/_ShardRepository"));
const GuildRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/GuildRepository"));
const SiegeFortressRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/SiegeFortressRepository"));
const get_load_information_1 = require("../../domain/usecase/get-load-information");
const OnlinePlayersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository"));
function getLoadInformationController() {
    return (0, get_load_information_1.getLoadInformation)(TB_UsersRepository_1.default, OnlinePlayersRepository_1.default, KillUniqueRepository_1.default, UserRepository_1.default, _ShardRepository_1.default, GuildRepository_1.default, SiegeFortressRepository_1.default);
}
exports.getLoadInformationController = getLoadInformationController;
