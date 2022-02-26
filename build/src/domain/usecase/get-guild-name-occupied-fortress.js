"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
Object.defineProperty(exports, "__esModule", { value: true });
async function getGuildNameOccupiedFortress(guild, siegeFortress) {
    var e_1, _a;
    const fortressInfo = [];
    const fortressNames = await siegeFortress.getAllGuildOccupiedFortress();
    if (!fortressNames) {
        throw Error('guilds not founds');
    }
    try {
        for (var fortressNames_1 = __asyncValues(fortressNames), fortressNames_1_1; fortressNames_1_1 = await fortressNames_1.next(), !fortressNames_1_1.done;) {
            const fortressName = fortressNames_1_1.value;
            const guildId = fortressName.getDataValue('GuildID');
            const guildName = await guild.getGuildOccupiedFortressByIds(guildId);
            fortressInfo.push({
                fortressName: await detectFortressName(fortressName.getDataValue('FortressID')),
                guildName: guildName === null || guildName === void 0 ? void 0 : guildName.getDataValue('Name')
            });
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (fortressNames_1_1 && !fortressNames_1_1.done && (_a = fortressNames_1.return)) await _a.call(fortressNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    if (fortressInfo.length === 0) {
        return [
            {
                fortressName: 'JG Fortress:',
                guildName: 'Not Occupied'
            }
        ];
    }
    if (!fortressInfo.find((ftwInfo) => ftwInfo.fortressName === 'JG Fortress:')) {
        fortressInfo.push({
            fortressName: 'JG Fortress:',
            guildName: 'Not Occupied'
        });
    }
    if (!fortressInfo.find((ftwInfo) => ftwInfo.fortressName === 'HT: Fortress:')) {
        fortressInfo.push({
            fortressName: 'HT: Fortress:',
            guildName: 'Not Occupied'
        });
    }
    return fortressInfo;
}
exports.default = getGuildNameOccupiedFortress;
async function detectFortressName(id) {
    switch (id) {
        case id = 1: {
            return 'JG Fortress:';
        }
        case id = 3: {
            return 'BD: Fortress:';
        }
        case id = 6: {
            return 'HT: Fortress:';
        }
        default: {
            return 'Not Occupied';
        }
    }
}
