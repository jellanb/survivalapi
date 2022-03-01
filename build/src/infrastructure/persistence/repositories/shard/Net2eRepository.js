"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Net2eRepository = void 0;
const TB_Net2e_1 = require("../../entities/shard/TB_Net2e");
function Net2eRepository() {
    return {
        add: async (userId, userName, password, question, answer) => {
            return await TB_Net2e_1.Net2e.create({
                Id: userId,
                strUserId: userName,
                password: password,
                question: question,
                answer: answer,
                secPrimary: 3,
                secContent: 3,
                lastModification: Date.now()
            });
        },
        findByID: async (id) => {
            return await TB_Net2e_1.Net2e.findAll({
                attributes: ['answer', 'question'],
                where: { Id: id }
            });
        },
        update: async (id, password) => {
            return await TB_Net2e_1.Net2e.update({
                password: password,
            }, {
                where: { JID: id }
            });
        }
    };
}
exports.Net2eRepository = Net2eRepository;
exports.default = Net2eRepository();
