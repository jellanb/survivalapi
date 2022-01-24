"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUserController = void 0;
const create_new_user_1 = __importDefault(require("../../domain/usecase/create-new-user"));
const createUserController = async (userDetails) => {
    try {
        return await create_new_user_1.default(userDetails);
    }
    catch (error) {
        let errorMessage = '';
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return {
            username: undefined,
            password: undefined,
            email: undefined,
            errorDescription: errorMessage
        };
    }
};
exports.createUserController = createUserController;
