"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _Char_1 = require("../../entities/shard/_Char");
async function ShardRepository() {
    return {
        findCharById: async (Id) => await _Char_1.Char.findAll({
            attributes: ['CharName16'],
            where: { CharID: Id }
        })
    };
}
exports.default = ShardRepository;
