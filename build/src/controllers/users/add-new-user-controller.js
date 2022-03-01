"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNewUserController = void 0;
const create_new_user_1 = __importDefault(require("../../domain/usecase/create-new-user"));
const TB_UsersRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/TB_UsersRepository"));
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
const Net2eRepository_1 = __importDefault(require("../../infrastructure/persistence/repositories/shard/Net2eRepository"));
const addNewUserController = async (userDetails) => {
    try {
        return await (0, create_new_user_1.default)(userDetails, TB_UsersRepository_1.default, Net2eRepository_1.default);
    }
    catch (error) {
        let errorMessage = '';
        if (error instanceof Error) {
            errorMessage = error.message;
            logger_1.default.error(`[ERROR] Cannot add new user, ${error.message}`);
        }
        return {
            username: undefined,
            password: undefined,
            email: undefined,
            errorDescription: errorMessage
        };
    }
};
exports.addNewUserController = addNewUserController;
