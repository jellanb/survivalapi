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
exports.updateUserById = exports.createUser = exports.findUserByUsernamePassword = exports.findUserByEmail = exports.findUserByName = void 0;
const TB_Users_1 = require("../entities/TB_Users");
const findUserByName = (name) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TB_Users_1.Users.findAll({
            attributes: ['StrUserId', 'JID'],
            where: { strUserId: name }
        });
        return result[0];
    }
    catch (e) {
        console.log(e);
    }
});
exports.findUserByName = findUserByName;
const findUserByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield TB_Users_1.Users.findAll({
            attributes: ['Email'],
            where: { email: email }
        });
        return result[0];
    }
    catch (e) {
        console.log(e);
    }
});
exports.findUserByEmail = findUserByEmail;
const findUserByUsernamePassword = (username, password) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TB_Users_1.Users.findAll({
        attributes: ['StrUserID', 'JID', 'Email', 'password'],
        where: { strUserId: username, password: password }
    });
    return result[0];
});
exports.findUserByUsernamePassword = findUserByUsernamePassword;
const createUser = (idUser, username, email, pass) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUserResult = yield TB_Users_1.Users.create({
            strUserId: idUser,
            password: pass,
            name: username,
            email: email,
            secPrimary: 3,
            secContent: 3,
            accPlayTime: 0,
            latestUpdateTimeToPlayTime: 0,
            playTime: 0
        });
        console.log('User add successfully!');
        return newUserResult;
    }
    catch (e) {
        console.log(e);
    }
});
exports.createUser = createUser;
const updateUserById = (id, password, email) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateSilk = yield TB_Users_1.Users.update({
            password: password,
            email: email
        }, {
            where: { JID: id }
        });
        console.log(`User: ${id} update successfully!`);
        return updateSilk;
    }
    catch (error) {
        console.log(error);
    }
});
exports.updateUserById = updateUserById;
