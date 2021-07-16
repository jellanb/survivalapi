"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniqueRanking = void 0;
const sequelize_1 = require("sequelize");
const database_1 = require("../../../database");
class UniqueRanking extends sequelize_1.Model {
}
exports.UniqueRanking = UniqueRanking;
UniqueRanking.init({
    charName: {
        primaryKey: true,
        type: sequelize_1.DataTypes.STRING,
        field: 'CharName',
    },
    score: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'Score',
    },
    jupiterEarth: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_THE_EARTH1',
    },
    tahomet: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET',
    },
    isyutaru: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_KK_ISYUTARU',
    },
    tigerGirl: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN',
    },
    capitanIvy: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_AM_IVY',
    },
    cerberus: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EU_KERBEROS',
    },
    capitanIvyL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_AM_IVY_L3',
    },
    uruchyL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_OA_URUCHI_L3',
    },
    uruchy: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_OA_URUCHI',
    },
    jupiter: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_JUPITER',
    },
    yuno: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_YUNO',
    },
    boneLord: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_TK_BONELORD',
    },
    tohometL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET_L3',
    },
    whiteKnight: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_20',
    },
    jupiterBabilon: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_BABILION',
    },
    jupiterDark: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_DARK_DOG',
    },
    mujigi120: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_120',
    },
    cerberusL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EU_KERBEROS_L3',
    },
    tigerGirlL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN_L3',
    },
    isyutaruL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_KK_ISYUTARU_L3',
    },
    boneLordL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_TK_BONELORD_L3',
    },
    Mujigi135: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_135',
    },
    blackSnakeL3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_TQ_BLACKSNAKE_L3',
    },
    hyeonghon140: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_140',
    },
    tease45: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_045',
    },
    tease120: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_120',
    },
    tease110: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_110',
    },
    winterPrincess: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_100',
    },
    tease01: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_001',
    },
    neith: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_NEITH',
    },
    isis: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_ISIS',
    },
    whiteSnakeTq: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_TQ_WHITESNAKE',
    },
    tease135: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_135',
    },
    selkis: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_SELKIS',
    },
    winterWhiteKnight100: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_100',
    },
    hyongheon40: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_040',
    },
    hyongheon120: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_120',
    },
    fwTaese130: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_130',
    },
    fwTaese40: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_040',
    },
    fwTaese140: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_140',
    },
    fwTaese20: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_020',
    },
    spiritClon: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON',
    },
    winterWhiteKnight80: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_80',
    },
    fwTaese111: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_111',
    },
    fwHyongheon20: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_020',
    },
    fwTaese5: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_005',
    },
    fwMujigi130: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_130',
    },
    fwTaese03: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_003',
    },
    fwHyongheon100: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_100',
    },
    fwHyongheon108: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_108',
    },
    fwHyongheon109: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_109',
    },
    fwHyongheon104: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_104',
    },
    fwHyongheon105: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_105',
    },
    fwTaese10: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_010',
    },
    fwMujigi10: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_010',
    },
    fwHyongheon130: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_130',
    },
    fwHyongheon41: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_041',
    },
    winterPrincess20: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_20',
    },
    fwTaese41: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_041',
    },
    fwHyongheon103: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_103',
    },
    fwTaese65: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_065',
    },
    fwTaese77: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_077',
    },
    fwTaese102: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_102',
    },
    fwTaese103: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_103',
    },
    fwTaese100: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_100',
    },
    fwTaese105: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_105',
    },
    fwTaese80: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_080',
    },
    spiritClon3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON3',
    },
    spiritClon2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON2',
    },
    spirit: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS',
    },
    creddyVolkoff: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CREDDY_VOLKOFF',
    },
    arabiaMustafa4: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA4',
    },
    giantDemon: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_GIANT_DEMON',
    },
    arabiaMustafa5: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA5',
    },
    arabiaMustafa2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA2',
    },
    arabiaMustafa1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA1',
    },
    arabiaKidemonas: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_KIDEMONAS',
    },
    creddyWolverine: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CREDDY_WOLVERINE',
    },
    fwHyongheon1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_001',
    },
    mujigi1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_001',
    },
    boneRoc: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_BONEROC',
    },
    arabiaVeneficaDemon: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_VENEFICA_DEMON',
    },
    Roc: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_ROC',
    },
    arabiaTiehfBoss: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_THIEF_BOSS',
    },
    mag1Roc: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_MAG_1ROC',
    },
    ghostUndineB1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_GOD_GHOST_UNDINE_B1',
    },
    fwMujigi50: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_050',
    },
    haroeris: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_HAROERIS',
    },
    arabiaMustafa3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA3',
    },
    phy2Roc: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_PHY_2ROC',
    },
    anubis: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_ANUBIS',
    },
    seth: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_SD_SETH',
    },
    jupiterBaal: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JUPITER_BAAL',
    },
    winterPrincess90: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_90',
    },
    winterWhiteKnight90: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_90',
    },
    ivyL2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_AM_IVY_L2',
    },
    uniqueInt: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_NEW_UNIQUE_INT',
    },
    uniqueStr: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_NEW_UNIQUE_STR',
    },
    arabiaMadGeneral: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_MAD_GENERAL',
    },
    tigerGirlL2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN_L2',
    },
    arabiaLaunatune: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_LAUNATUNE',
    },
    fwMujigi20: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_020',
    },
    fwMujigi25: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_025',
    },
    fwMujigi15: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_015',
    },
    fwHyongheon10: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_010',
    },
    fwHyongheon50: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_050',
    },
    fwMujigi40: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_040',
    },
    fwHyongheon30: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_030',
    },
    fwMujigi30: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_030',
    },
    mangnyangEvil: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_CH_MANGNYANG_EVIL',
    },
    ghostUndineB4: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_GOD_GHOST_UNDINE_B4',
    },
    tample: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_JOB_TAMPLE',
    },
    arabiaGarden1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN1',
    },
    arabiaGarden2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN2',
    },
    arabiaGarden3: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN3',
    },
    arabiaGeenie: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_ARABIA_GEENIE',
    },
    fwHyongheon15: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_015',
    },
    fwMujigi2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_002',
    },
    tahometL2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET_L2',
    },
    anupisL2: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_PHY_1ANUPIS',
    },
    isis1: {
        type: sequelize_1.DataTypes.INTEGER,
        field: 'MOB_PHY_1ISIS',
    },
    killDate: {
        type: sequelize_1.DataTypes.STRING,
        field: 'KILL_DATE'
    }
}, {
    sequelize: database_1.sequelize,
    freezeTableName: true,
    tableName: 'UniqueRanking',
    createdAt: false,
    updatedAt: false
});
