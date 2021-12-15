"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const UniqueRankingRepository_1 = require("../../infrastructure/persistence/repositories/shard/UniqueRankingRepository");
async function getAllUniqueKills() {
    const uniqueRankingKills = await (0, UniqueRankingRepository_1.findAllUniqueKills)();
    const usersNamesRanking = await getUsersNamesRaking(uniqueRankingKills);
    const uniqueKills = await getUniqueKillsByUserName(uniqueRankingKills, usersNamesRanking);
    return await prepareData(usersNamesRanking, uniqueKills, uniqueRankingKills);
}
exports.default = getAllUniqueKills;
const getUsersNamesRaking = async (uniqueRanking) => {
    var e_1, _a;
    let usersNames = [];
    try {
        for (var uniqueRanking_1 = __asyncValues(uniqueRanking), uniqueRanking_1_1; uniqueRanking_1_1 = await uniqueRanking_1.next(), !uniqueRanking_1_1.done;) {
            const data = uniqueRanking_1_1.value;
            const userName = data.getDataValue('charName');
            if (uniqueRanking.find((data) => data.getDataValue('charName') === userName)) {
                usersNames.push(userName);
            }
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (uniqueRanking_1_1 && !uniqueRanking_1_1.done && (_a = uniqueRanking_1.return)) await _a.call(uniqueRanking_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    return usersNames;
};
const getUniqueKillsByUserName = async (uniqueRanking, usersNames) => {
    var e_2, _a, e_3, _b;
    let uniqueNameList = [];
    try {
        for (var usersNames_1 = __asyncValues(usersNames), usersNames_1_1; usersNames_1_1 = await usersNames_1.next(), !usersNames_1_1.done;) {
            const char = usersNames_1_1.value;
            try {
                for (var _c = (e_3 = void 0, __asyncValues(uniqueRanking.filter((info) => info.getDataValue('charName') === char))), _d; _d = await _c.next(), !_d.done;) {
                    const uniqueKill = _d.value;
                    Object.entries(uniqueKill.toJSON()).forEach(entry => {
                        const [key, value] = entry;
                        const unique = uniqueNameList.find((unique) => unique.name === key);
                        if (value > 0 && !unique) {
                            uniqueNameList.push({
                                name: key,
                            });
                        }
                    });
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_b = _c.return)) await _b.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
    }
    catch (e_2_1) { e_2 = { error: e_2_1 }; }
    finally {
        try {
            if (usersNames_1_1 && !usersNames_1_1.done && (_a = usersNames_1.return)) await _a.call(usersNames_1);
        }
        finally { if (e_2) throw e_2.error; }
    }
    return uniqueNameList;
};
const prepareData = async (usersNamesRanking, uniqueKills, uniqueRankingKills) => {
    var e_4, _a, e_5, _b;
    let resultData = [];
    try {
        for (var usersNamesRanking_1 = __asyncValues(usersNamesRanking), usersNamesRanking_1_1; usersNamesRanking_1_1 = await usersNamesRanking_1.next(), !usersNamesRanking_1_1.done;) {
            const userName = usersNamesRanking_1_1.value;
            try {
                for (var uniqueKills_1 = (e_5 = void 0, __asyncValues(uniqueKills)), uniqueKills_1_1; uniqueKills_1_1 = await uniqueKills_1.next(), !uniqueKills_1_1.done;) {
                    const unique = uniqueKills_1_1.value;
                    const data = uniqueRankingKills.find((data) => data.getDataValue('charName') === userName);
                    resultData.push({ username: userName, unique: unique.name, killQuantity: data.getDataValue(unique.name) });
                }
            }
            catch (e_5_1) { e_5 = { error: e_5_1 }; }
            finally {
                try {
                    if (uniqueKills_1_1 && !uniqueKills_1_1.done && (_b = uniqueKills_1.return)) await _b.call(uniqueKills_1);
                }
                finally { if (e_5) throw e_5.error; }
            }
        }
    }
    catch (e_4_1) { e_4 = { error: e_4_1 }; }
    finally {
        try {
            if (usersNamesRanking_1_1 && !usersNamesRanking_1_1.done && (_a = usersNamesRanking_1.return)) await _a.call(usersNamesRanking_1);
        }
        finally { if (e_4) throw e_4.error; }
    }
    console.log(resultData);
    return resultData;
};
