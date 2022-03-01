"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SilkRepository = void 0;
const SK_Silk_1 = require("../../entities/shard/SK_Silk");
function SilkRepository() {
    return {
        findById: async (id) => {
            const silkFromUser = await SK_Silk_1.Silk.findAll({
                attributes: ['silk_own'],
                where: { Id: id }
            });
            return silkFromUser[0];
        },
        add: async (userId, silkQuantity) => {
            const newSilk = await SK_Silk_1.Silk.create({
                Id: userId,
                SilkOwn: silkQuantity,
                SilkGift: 0,
                silkPoint: 0
            });
            return newSilk;
        },
        update: async (userId, silkQuantity) => {
            const updateSilk = await SK_Silk_1.Silk.update({
                Id: userId,
                SilkOwn: silkQuantity,
                SilkGift: 0,
                silkPoint: 0
            }, {
                where: { JID: userId }
            });
            return updateSilk;
        }
    };
}
exports.SilkRepository = SilkRepository;
exports.default = SilkRepository();
