"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSilk = exports.createSilk = exports.findSilkById = void 0;
const SK_Silk_1 = require("../../entities/shard/SK_Silk");
const findSilkById = async (id) => {
    const silkFromUser = await SK_Silk_1.Silk.findAll({
        attributes: ['silk_own'],
        where: { Id: id }
    });
    return silkFromUser[0];
};
exports.findSilkById = findSilkById;
const createSilk = async (userID, silkQuantity) => {
    try {
        const newSilk = await SK_Silk_1.Silk.create({
            Id: userID,
            SilkOwn: silkQuantity,
            SilkGift: 0,
            SilkPoint: 0
        });
        console.log(newSilk);
        console.log('Silk add successfully!');
        return newSilk;
    }
    catch (error) {
        console.log(error);
    }
};
exports.createSilk = createSilk;
const updateSilk = async (userID, silkQuantity) => {
    try {
        const updateSilk = await SK_Silk_1.Silk.update({
            Id: userID,
            SilkOwn: silkQuantity,
            SilkGift: 0,
            silkPoint: 0
        }, {
            where: { JID: userID }
        });
        console.log('silk update successfully!');
        return updateSilk;
    }
    catch (error) {
        console.log(error);
    }
};
exports.updateSilk = updateSilk;
