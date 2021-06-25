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
exports.updateSilk = exports.createSilk = exports.findSilkById = void 0;
const SK_Silk_1 = require("../entities/SK_Silk");
const findSilkById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const silkFromUser = yield SK_Silk_1.Silk.findAll({
        attributes: ['silk_own'],
        where: { Id: id }
    });
    return silkFromUser[0];
});
exports.findSilkById = findSilkById;
const createSilk = (userID, silkQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newSilk = yield SK_Silk_1.Silk.create({
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
});
exports.createSilk = createSilk;
const updateSilk = (userID, silkQuantity) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updateSilk = yield SK_Silk_1.Silk.update({
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
});
exports.updateSilk = updateSilk;
