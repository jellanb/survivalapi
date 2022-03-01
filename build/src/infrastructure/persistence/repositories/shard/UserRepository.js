"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserShardRepository = void 0;
const _User_1 = require("../../entities/shard/_User");
function UserShardRepository() {
    return {
        findUserById: async (charId) => await _User_1.UserAndChar.findAll({
            attributes: ['UserJID'],
            where: { charId }
        })
    };
}
exports.UserShardRepository = UserShardRepository;
exports.default = UserShardRepository();
