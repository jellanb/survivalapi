"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateUniqueRanking = exports.createUniqueRanking = exports.findUniqueRankingByUsername = exports.findAllUniqueKills = void 0;
const UniqueRanking_1 = require("../../entities/shard/UniqueRanking");
const findAllUniqueKills = async () => {
    const uniqueRankingKills = await UniqueRanking_1.UniqueRanking.findAll();
    return uniqueRankingKills;
};
exports.findAllUniqueKills = findAllUniqueKills;
const findUniqueRankingByUsername = async (username) => {
    const uniqueRanking = await UniqueRanking_1.UniqueRanking.findAll({
        attributes: ['CharName'],
        where: { charName: username }
    });
    return uniqueRanking[0];
};
exports.findUniqueRankingByUsername = findUniqueRankingByUsername;
const createUniqueRanking = async (name, unique) => {
    let updateUniqueKill = null;
    switch (unique) {
        case 'MOB_JUPITER_THE_EART1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                jupiterEarth: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tahomet: 1
            });
            return updateUniqueKill;
        case 'MOB_KK_ISYUTARU':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                isyutaru: 1
            });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tigerGirl: 1
            });
            return updateUniqueKill;
        case 'MOB_AM_IVY':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                capitanIvy: 1
            });
            return updateUniqueKill;
        case 'MOB_EU_KERBEROS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                cerberus: 1
            });
            return updateUniqueKill;
        case 'MOB_AM_IVY_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                capitanIvyL3: 1
            });
            return updateUniqueKill;
        case 'MOB_OA_URUCHI_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                uruchyL3: 1
            });
            return updateUniqueKill;
        case 'MOB_OA_URUCHI':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                uruchy: 1
            });
            return updateUniqueKill;
        case 'MOB_JUPITER_JUPITER':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                uruchy: 1
            });
            return updateUniqueKill;
        case 'MOB_JUPITER_YUNO':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                yuno: 1
            });
            return updateUniqueKill;
        case 'MOB_TK_BONELORD':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                boneLord: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tohometL3: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_20':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                whiteKnight: 1
            });
            return updateUniqueKill;
        case 'MOB_JUPITER_BABILION':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                jupiterBabilon: 1
            });
            return updateUniqueKill;
        case 'MOB_JUPITER_DARK_DOG':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                jupiterDark: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                mujigi120: 1
            });
            return updateUniqueKill;
        case 'MOB_EU_KERBEROS_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                cerberusL3: 1
            });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tigerGirlL3: 1
            });
            return updateUniqueKill;
        case 'MOB_KK_ISYUTARU_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                isyutaruL3: 1
            });
            return updateUniqueKill;
        case 'MOB_TK_BONELORD_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                boneLordL3: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_135':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                Mujigi135: 1
            });
            return updateUniqueKill;
        case 'MOB_TQ_BLACKSNAKE_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                blackSnakeL3: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_140':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                hyeonghon140: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_045':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                hyeonghon140: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tease45: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_110':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tease110: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterPrincess: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tease01: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_NEITH':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                neith: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_ISIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                isis: 1
            });
            return updateUniqueKill;
        case 'MOB_TQ_WHITESNAKE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                whiteSnakeTq: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_135':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tease135: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_SELKIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                selkis: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterWhiteKnight100: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                hyongheon40: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                hyongheon120: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese130: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese40: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_140':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese140: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese20: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                spiritClon: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_80':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterWhiteKnight80: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_111':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese111: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon20: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_005':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese5: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi130: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_003':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese03: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon100: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_108':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon108: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_109':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon109: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_104':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon104: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_105':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon105: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese10: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi10: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon130: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_041':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon41: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_20':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterPrincess20: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_041':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese41: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_103':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon103: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_065':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese65: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_077':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese77: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_102':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese102: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_103':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese103: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese100: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_105':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese105: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_080':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwTaese80: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                spiritClon3: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                spiritClon2: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                spirit: 1
            });
            return updateUniqueKill;
        case 'MOB_CREDDY_VOLKOFF':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                creddyVolkoff: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA4':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMustafa4: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_GIANT_DEMON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                giantDemon: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA5':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMustafa5: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMustafa2: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMustafa1: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_KIDEMONAS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaKidemonas: 1
            });
            return updateUniqueKill;
        case 'MOB_CREDDY_WOLVERINE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                creddyWolverine: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon1: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                mujigi1: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_BONEROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                boneRoc: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_VENEFICA_DEMON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaVeneficaDemon: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                Roc: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_THIEF_BOSS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaTiehfBoss: 1
            });
            return updateUniqueKill;
        case 'MOB_MAG_1ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                mag1Roc: 1
            });
            return updateUniqueKill;
        case 'MOB_GOD_GHOST_UNDINE_B1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                ghostUndineB1: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_050':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi50: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_HAROERIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                haroeris: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMustafa3: 1
            });
            return updateUniqueKill;
        case 'MOB_PHY_2ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                phy2Roc: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_ANUBIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                anubis: 1
            });
            return updateUniqueKill;
        case 'MOB_SD_SETH':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                seth: 1
            });
            return updateUniqueKill;
        case 'MOB_JUPITER_BAAL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                jupiterBaal: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_90':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterPrincess90: 1
            });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_90':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                winterWhiteKnight90: 1
            });
            return updateUniqueKill;
        case 'MOB_AM_IVY_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                ivyL2: 1
            });
            return updateUniqueKill;
        case 'MOB_NEW_UNIQUE_INT':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                uniqueInt: 1
            });
            return updateUniqueKill;
        case 'MOB_NEW_UNIQUE_STR':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                uniqueStr: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_MAD_GENERAL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaMadGeneral: 1
            });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tigerGirlL2: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_LAUNATUNE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaLaunatune: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi20: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_025':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi25: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_015':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi15: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon10: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_050':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon50: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi40: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_030':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon30: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_030':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi30: 1
            });
            return updateUniqueKill;
        case 'MOB_CH_MANGNYANG_EVIL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                mangnyangEvil: 1
            });
            return updateUniqueKill;
        case 'MOB_GOD_GHOST_UNDINE_B4':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                ghostUndineB4: 1
            });
            return updateUniqueKill;
        case 'MOB_JOB_TAMPLE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tample: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaGarden1: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaGarden2: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaGarden3: 1
            });
            return updateUniqueKill;
        case 'MOB_ARABIA_GEENIE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                arabiaGeenie: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_015':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwHyongheon15: 1
            });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_002':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                fwMujigi2: 1
            });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                tahometL2: 1
            });
            return updateUniqueKill;
        case 'MOB_PHY_1ANUPIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                anupisL2: 1
            });
            return updateUniqueKill;
        case 'MOB_PHY_1ISIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.create({
                charName: name,
                score: 0,
                isis1: 1
            });
            return updateUniqueKill;
    }
};
exports.createUniqueRanking = createUniqueRanking;
const updateUniqueRanking = async (name, unique) => {
    let updateUniqueKill = null;
    switch (unique) {
        case 'MOB_JUPITER_THE_EART1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_THE_EART1', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_TAHOMET', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_KK_ISYUTARU':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_KK_ISYUTARU', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CH_TIGERWOMAN', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_AM_IVY':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_AM_IVY', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EU_KERBEROS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EU_KERBEROS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_AM_IVY_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_AM_IVY_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_OA_URUCHI_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_OA_URUCHI_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_OA_URUCHI':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_OA_URUCHI', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JUPITER_JUPITER':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_JUPITER', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JUPITER_YUNO':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_YUNO', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_TK_BONELORD':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_TK_BONELORD', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_TAHOMET_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_20':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_WHITEKNIGHT_20', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JUPITER_BABILION':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_BABILION', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JUPITER_DARK_DOG':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_DARK_DOG', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_120', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EU_KERBEROS_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EU_KERBEROS_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CH_TIGERWOMAN_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_KK_ISYUTARU_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_KK_ISYUTARU_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_TK_BONELORD_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_TK_BONELORD_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_135':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_135', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_TQ_BLACKSNAKE_L3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_TQ_BLACKSNAKE_L3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_140':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_140', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_045':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_045', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_120', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_110':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_110', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_PRINCESS_100', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_001', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_NEITH':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_NEITH', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_ISIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_ISIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_TQ_WHITESNAKE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_TQ_WHITESNAKE', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_135':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_135', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_SELKIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_SELKIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_WHITEKNIGHT_100', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_040', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_120':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_120', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_130', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_040', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_140':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_140', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_020', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_SPIRITS_CLON', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_80':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_WHITEKNIGHT_80', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_111':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_111', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_020', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_005':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_005', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_130', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_003':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_003', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_100', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_108':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_108', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_109':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_109', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_104':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_104', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_105':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_105', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_010', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_010', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_130':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_130', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_041':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_041', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_20':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_PRINCESS_20', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_041':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_041', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_103':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_103', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_065':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_065', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_077':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_077', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_102':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_102', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_103':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_103', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_100':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_100', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_105':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_105', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_TAESE_080':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_TAESE_080', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_SPIRITS_CLON3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS_CLON2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_SPIRITS_CLON2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_SPIRITS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_SPIRITS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CREDDY_VOLKOFF':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CREDDY_VOLKOFF', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA4':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MUSTAFA4', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_GIANT_DEMON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_GIANT_DEMON', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA5':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MUSTAFA5', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MUSTAFA2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MUSTAFA1', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_KIDEMONAS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_KIDEMONAS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CREDDY_WOLVERINE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CREDDY_WOLVERINE', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_001', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_001':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_001', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_BONEROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_BONEROC', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_VENEFICA_DEMON':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_VENEFICA_DEMON', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_ROC', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_THIEF_BOSS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_THIEF_BOSS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_MAG_1ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_MAG_1ROC', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_GOD_GHOST_UNDINE_B1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_GOD_GHOST_UNDINE_B1', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_050':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_050', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_HAROERIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_HAROERIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MUSTAFA3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MUSTAFA3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_PHY_2ROC':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_PHY_2ROC', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_ANUBIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_ANUBIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_SD_SETH':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_SD_SETH', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JUPITER_BAAL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JUPITER_BAAL', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_PRINCESS_90':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_PRINCESS_90', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_EV_WINTER_WHITEKNIGHT_90':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_EV_WINTER_WHITEKNIGHT_90', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_AM_IVY_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_AM_IVY_L2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_NEW_UNIQUE_INT':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_NEW_UNIQUE_INT', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_NEW_UNIQUE_STR':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_NEW_UNIQUE_STR', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_MAD_GENERAL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_MAD_GENERAL', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CH_TIGERWOMAN_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CH_TIGERWOMAN_L2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_LAUNATUNE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_LAUNATUNE', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_020':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_020', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_025':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_025', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_015':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_015', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_010':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_010', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_050':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_050', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_040':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_040', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_030':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_030', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_030':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_030', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_CH_MANGNYANG_EVIL':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_CH_MANGNYANG_EVIL', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_GOD_GHOST_UNDINE_B4':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_GOD_GHOST_UNDINE_B4', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_JOB_TAMPLE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_JOB_TAMPLE', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN1':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_GARDEN1', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_GARDEN2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_GARDEN3':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_GARDEN3', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_ARABIA_GEENIE':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_ARABIA_GEENIE', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_HYEONGCHEON_015':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_HYEONGCHEON_015', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_FW_MUJIGI_002':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_FW_MUJIGI_002', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_RM_TAHOMET_L2':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_RM_TAHOMET_L2', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_PHY_1ANUPIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_PHY_1ANUPIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
        case 'MOB_PHY_1ISIS':
            updateUniqueKill = await UniqueRanking_1.UniqueRanking.increment('MOB_PHY_1ISIS', { by: 1, where: { CharName: name } });
            return updateUniqueKill;
    }
};
exports.updateUniqueRanking = updateUniqueRanking;
