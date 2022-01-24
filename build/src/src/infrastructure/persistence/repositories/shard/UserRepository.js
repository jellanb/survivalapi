"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _User_1 = require("../../entities/shard/_User");
async function UserRepository() {
    return {
        findUserById: async (charId) => await _User_1.UserAndChar.findAll({
            attributes: ['UserJID'],
            where: { charId }
        })
    };
}
exports.default = UserRepository;
