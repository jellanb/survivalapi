"use strict";
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLoadInformation = void 0;
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
const metric_collect_1 = require("../../infrastructure/metrics/metric-collect");
async function getLoadInformation(userRepository, onlinePlayersRepository, uniqueKillRepository, userShardRepository, charRepository, guildRepository, siegeFortressRepository, handlerMetrics) {
    var e_1, _a;
    const { userVisitWebSite } = metric_collect_1.METRICS_TO_COLLECT;
    logger_1.default.info('Init load information to load web site');
    logger_1.default.info('Getting amount user online');
    const usersQuantityOnline = await onlinePlayersRepository.getQuantityUsersOn();
    logger_1.default.info(`Finish get amount user online with amount:${usersQuantityOnline}`);
    logger_1.default.info('Finding username last unique kill');
    const uniqueKill = await uniqueKillRepository.findLastKill();
    const charId = uniqueKill[0].getDataValue('charId');
    if (!charId)
        return;
    const username = await charRepository.findCharById(charId);
    if (!username)
        return;
    logger_1.default.info(`Finish username last unique kill with username: ${username[0].getDataValue('CharName16')}`);
    logger_1.default.info(`Init guilds name occupied fortress`);
    const fortressInfo = [];
    const fortressNames = await siegeFortressRepository.getAllGuildOccupiedFortress();
    if (!fortressNames) {
        throw Error('guilds not founds');
    }
    try {
        for (var fortressNames_1 = __asyncValues(fortressNames), fortressNames_1_1; fortressNames_1_1 = await fortressNames_1.next(), !fortressNames_1_1.done;) {
            const fortressName = fortressNames_1_1.value;
            const guildId = fortressName.getDataValue('GuildID');
            const guildName = await guildRepository.getGuildOccupiedFortressByIds(guildId);
            fortressInfo.push({
                fortressName: await detectFortressName(fortressName.getDataValue('FortressID')),
                guildName: guildName === null || guildName === void 0 ? void 0 : guildName.getDataValue('Name')
            });
            logger_1.default.info(`Guilds name occupied fortress found with name: ${guildName === null || guildName === void 0 ? void 0 : guildName.getDataValue('Name')}`);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (fortressNames_1_1 && !fortressNames_1_1.done && (_a = fortressNames_1.return)) await _a.call(fortressNames_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
    logger_1.default.info(`Finish find guilds name occupied fortress`);
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
    const labelValues = {
        web_site: 1,
        payment: 0,
        document_type: 0,
        error_code: '',
        source: ''
    };
    handlerMetrics.incrementMetric({
        metricName: userVisitWebSite.name,
        labelValues,
        incrementValue: 1
    });
    return {
        usersOnline: usersQuantityOnline,
        usernameLastUniqueKill: username[0],
        fortressInfo: fortressInfo
    };
}
exports.getLoadInformation = getLoadInformation;
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
