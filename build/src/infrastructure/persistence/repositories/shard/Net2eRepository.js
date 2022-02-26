"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateNet2eById = exports.findById = exports.addNet2e = void 0;
const TB_Net2e_1 = require("../../entities/shard/TB_Net2e");
const addNet2e = async (userId, userName, password, question, answer) => {
    const newNet2e = await TB_Net2e_1.Net2e.create({
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
};
exports.addNet2e = addNet2e;
const findById = async (id) => {
    const result = await TB_Net2e_1.Net2e.findAll({
        attributes: ['answer', 'question'],
        where: { Id: id }
    });
    return result[0];
};
exports.findById = findById;
const updateNet2eById = async (id, password) => {
    try {
        const updateNet2e = await TB_Net2e_1.Net2e.update({
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
};
exports.updateNet2eById = updateNet2eById;
