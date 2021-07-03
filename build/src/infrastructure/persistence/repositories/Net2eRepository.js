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
exports.updateNet2eById = exports.findById = exports.addNet2e = void 0;
const TB_Net2e_1 = require("../entities/TB_Net2e");
const addNet2e = (userId, userName, password, question, answer) => __awaiter(void 0, void 0, void 0, function* () {
    const newNet2e = yield TB_Net2e_1.Net2e.create({
        Id: userId,
        strUserId: userName,
        password: password,
        question: question,
        answer: answer,
        secPrimary: 3,
        secContent: 3,
        lastModification: Date.now()
    });
    console.log('Net2e add successfully!');
    return newNet2e;
});
exports.addNet2e = addNet2e;
const findById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield TB_Net2e_1.Net2e.findAll({
        attributes: ['answer', 'question'],
        where: { Id: id }
    });
    return result[0];
});
exports.findById = findById;
const updateNet2eById = (id, password) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateNet2e = yield TB_Net2e_1.Net2e.update({
            password: password,
        }, {
            where: { JID: id }
        });
        console.log(`UserDetails by id:${id} update successfully!`);
        return updateNet2e;
    }
    catch (e) {
        console.log(e);
    }
});
exports.updateNet2eById = updateNet2eById;
