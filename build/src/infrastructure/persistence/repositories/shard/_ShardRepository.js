"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShardRepository = void 0;
const _Char_1 = require("../../entities/shard/_Char");
function ShardRepository() {
    return {
        findCharById: async (Id) => await _Char_1.Char.findAll({
            attributes: ['CharName16'],
            where: { CharID: Id }
        })
    };
}
exports.ShardRepository = ShardRepository;
exports.default = ShardRepository();
