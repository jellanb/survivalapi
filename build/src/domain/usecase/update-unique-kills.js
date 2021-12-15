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
const fs_1 = __importDefault(require("fs"));
const readline_1 = __importDefault(require("readline"));
const UniqueRankingRepository_1 = require("../../infrastructure/persistence/repositories/shard/UniqueRankingRepository");
async function readUniqueKillsFile() {
    var e_1, _a;
    const fileName = await getFileName();
    //const path = `C:/Server Files/evaLog/${fileName}`
    const path = `/Users/vn07k3p/Documents/cursos/survivalapi/test/filesTest/_uniqueKills.txt`;
    try {
        if (fs_1.default.existsSync(path)) {
            const reader = await readline_1.default.createInterface({
                input: fs_1.default.createReadStream(path),
                output: process.stdout
            });
            try {
                for (var reader_1 = __asyncValues(reader), reader_1_1; reader_1_1 = await reader_1.next(), !reader_1_1.done;) {
                    const line = reader_1_1.value;
                    const { username, monster, dateKill } = await getKillDate(line);
                    if (username === '' && monster === '') {
                        console.log(`[ERROR]: cant not found username and monster from uniqueKills file!`);
                        return; //TODO set throw error
                    }
                    await processUniqueKill(username, monster, dateKill);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (reader_1_1 && !reader_1_1.done && (_a = reader_1.return)) await _a.call(reader_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            fs_1.default.truncate(path, 0, () => { });
        }
    }
    catch (error) {
        console.log(error);
    }
}
exports.default = readUniqueKillsFile;
const processUniqueKill = async (username, monster, dateKill) => {
    const lastUniqueKills = await (0, UniqueRankingRepository_1.findUniqueRankingByUsername)(username);
    if (lastUniqueKills === undefined) {
        console.log(`saved unique kill monster : ${monster} to username: ${username}!`);
        return await (0, UniqueRankingRepository_1.createUniqueRanking)(username, monster);
    }
    else {
        console.log(`update unique kill monster : ${monster} to username: ${username}`);
        return await (0, UniqueRankingRepository_1.updateUniqueRanking)(username, monster);
    }
};
async function getKillDate(uniqueKillsUpdate) {
    try {
        const endDate = uniqueKillsUpdate.match(']').index;
        const date = uniqueKillsUpdate.substring(1, endDate);
        const startMonster = uniqueKillsUpdate.match('MOB').index;
        const endMonster = uniqueKillsUpdate.match('killed').index;
        const monster = uniqueKillsUpdate.substring(startMonster, endMonster - 2);
        const startUsername = uniqueKillsUpdate.match('by').index;
        const endUsername = startUsername + uniqueKillsUpdate.substring(startUsername).match(']').index;
        const username = uniqueKillsUpdate.substring(startUsername + 4, endUsername);
        return {
            username: username,
            monster: monster,
            dateKill: date
        };
    }
    catch (error) {
        console.log(error);
        return { username: '', monster: '', dateKill: '' };
    }
}
async function getFileName() {
    const currentDate = new Date(Date.now());
    const baseName = 'uniquekills.txt';
    return `${currentDate.getDate()}-${currentDate.getMonth() + 1}-${currentDate.getFullYear()}_${baseName}`;
}