"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UsersRepository_1 = require("../../infrastructure/persistence/repositories/UsersRepository");
const Net2eRepository_1 = require("../../infrastructure/persistence/repositories/Net2eRepository");
function createNewUser(idUser, username, email, pass, question, answer) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const user = yield UsersRepository_1.createUser(idUser, idUser, email, pass);
            if (!user) {
                throw new Error('CANT_NOT_CREATE_USER');
            }
            const { Id } = JSON.parse(JSON.stringify(user));
            yield Net2eRepository_1.addNet2e(Id, username, pass, question, answer);
        }
        catch (error) {
            console.log(error);
        }
    });
}
exports.default = createNewUser;
