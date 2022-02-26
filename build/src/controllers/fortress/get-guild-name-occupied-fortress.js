"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getGuildNameOccupiedFortressController = void 0;
const get_guild_name_occupied_fortress_1 = __importDefault(require("../../domain/usecase/get-guild-name-occupied-fortress"));
const GuildRepository_1 = require("../../infrastructure/persistence/repositories/shard/GuildRepository");
const SiegeFortressRepository_1 = require("../../infrastructure/persistence/repositories/shard/SiegeFortressRepository");
const getGuildNameOccupiedFortressController = async () => {
    try {
        return await (0, get_guild_name_occupied_fortress_1.default)(await (0, GuildRepository_1.GuildRepository)(), await (0, SiegeFortressRepository_1.SiegeFortressRepository)());
    }
    catch (failure) {
        console.log(failure);
    }
};
exports.getGuildNameOccupiedFortressController = getGuildNameOccupiedFortressController;
