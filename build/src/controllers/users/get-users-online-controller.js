"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const get_online_playes_1 = __importDefault(require("../../domain/usecase/get-online-playes"));
const OnlinePlayersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/vplus/OnlinePlayersRepository"));
async function getUsersOnlineController() {
    try {
        return await (0, get_online_playes_1.default)(await OnlinePlayersRepository_1.default);
    }
    catch (failure) {
        console.log(failure);
    }
}
exports.default = getUsersOnlineController;
