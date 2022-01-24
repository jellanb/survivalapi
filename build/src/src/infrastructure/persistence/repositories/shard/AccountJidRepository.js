"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _AccountJID_1 = require("../../entities/shard/_AccountJID");
async function AccountJidRepository() {
    return {
        findAccountById: async (id) => await _AccountJID_1.AccountJID.findAll({
            attributes: ['AccountID'],
            where: { JID: id }
        })
    };
}
exports.default = AccountJidRepository;
