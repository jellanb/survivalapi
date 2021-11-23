import { DataTypes, Model } from 'sequelize';
import { shardDB } from '../../connectionManager/moduleConnections';

export class UniqueRanking extends Model{}

UniqueRanking.init({
    charName: {
        primaryKey: true,
        type: DataTypes.STRING,
        field: 'CharName',

    },
    score:{
        type: DataTypes.INTEGER,
        field: 'Score',

    },
    jupiterEarth: {
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_THE_EARTH1',
    },
    tahomet:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET',

    },
    isyutaru: {
        type: DataTypes.INTEGER,
        field: 'MOB_KK_ISYUTARU',

    },
    tigerGirl: {
        type: DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN',

    },
    capitanIvy: {
        type: DataTypes.INTEGER,
        field: 'MOB_AM_IVY',

    },
    cerberus: {
        type: DataTypes.INTEGER,
        field: 'MOB_EU_KERBEROS',

    },
    capitanIvyL3: {
        type: DataTypes.INTEGER,
        field: 'MOB_AM_IVY_L3',

    },
    uruchyL3: {
        type: DataTypes.INTEGER,
        field: 'MOB_OA_URUCHI_L3',

    },
    uruchy:{
        type: DataTypes.INTEGER,
        field: 'MOB_OA_URUCHI',

    },
    jupiter:{
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_JUPITER',

    },
    yuno:{
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_YUNO',

    },
    boneLord:{
        type: DataTypes.INTEGER,
        field: 'MOB_TK_BONELORD',

    },
    tohometL3:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET_L3',

    },
    whiteKnight:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_20',

    },
    jupiterBabilon:{
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_BABILION',

    },
    jupiterDark: {
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_DARK_DOG',

    },
    mujigi120:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_120',

    },
    cerberusL3:{
        type: DataTypes.INTEGER,
        field: 'MOB_EU_KERBEROS_L3',

    },
    tigerGirlL3:{
        type: DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN_L3',

    },
    isyutaruL3:{
        type: DataTypes.INTEGER,
        field: 'MOB_KK_ISYUTARU_L3',

    },
    boneLordL3: {
        type: DataTypes.INTEGER,
        field: 'MOB_TK_BONELORD_L3',

    },
    Mujigi135:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_135',

    },
    blackSnakeL3:{
        type: DataTypes.INTEGER,
        field: 'MOB_TQ_BLACKSNAKE_L3',

    },
    hyeonghon140:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_140',

    },
    tease45:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_045',

    },
    tease120:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_120',

    },
    tease110:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_110',

    },
    winterPrincess:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_100',

    },
    tease01:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_001',

    },
    neith:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_NEITH',

    },
    isis:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_ISIS',

    },
    whiteSnakeTq:{
        type: DataTypes.INTEGER,
        field:'MOB_TQ_WHITESNAKE',

    },
    tease135:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_135',

    },
    selkis:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_SELKIS',

    },
    winterWhiteKnight100:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_100',

    },
    hyongheon40:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_040',

    },
    hyongheon120:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_120',

    },
    fwTaese130:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_130',

    },
    fwTaese40:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_040',

    },
    fwTaese140:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_140',

    },
    fwTaese20:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_020',

    },
    spiritClon:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON',

    },
    winterWhiteKnight80:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_80',

    },
    fwTaese111:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_111',

    },
    fwHyongheon20:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_020',

    },
    fwTaese5:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_005',

    },
    fwMujigi130:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_130',

    },
    fwTaese03:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_003',

    },
    fwHyongheon100:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_100',

    },
    fwHyongheon108:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_108',

    },
    fwHyongheon109:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_109',

    },
    fwHyongheon104:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_104',

    },
    fwHyongheon105:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_105',

    },
    fwTaese10:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_010',

    },
    fwMujigi10:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_010',

    },
    fwHyongheon130:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_130',

    },
    fwHyongheon41:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_041',

    },
    winterPrincess20:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_20',

    },
    fwTaese41:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_041',

    },
    fwHyongheon103:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_103',

    },
    fwTaese65:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_065',

    },
    fwTaese77:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_077',

    },
    fwTaese102:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_102',

    },
    fwTaese103:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_103',

    },
    fwTaese100:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_100',

    },
    fwTaese105:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_105',

    },
    fwTaese80:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_TAESE_080',

    },
    spiritClon3:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON3',

    },
    spiritClon2:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS_CLON2',

    },
    spirit:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_SPIRITS',

    },
    creddyVolkoff:{
        type: DataTypes.INTEGER,
        field: 'MOB_CREDDY_VOLKOFF',

    },
    arabiaMustafa4:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA4',

    },
    giantDemon:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_GIANT_DEMON',

    },
    arabiaMustafa5:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA5',

    },
    arabiaMustafa2:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA2',

    },
    arabiaMustafa1:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA1',

    },
    arabiaKidemonas:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_KIDEMONAS',

    },
    creddyWolverine:{
        type: DataTypes.INTEGER,
        field: 'MOB_CREDDY_WOLVERINE',

    },
    fwHyongheon1:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_001',

    },
    mujigi1:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_001',

    },
    boneRoc:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_BONEROC',

    },
    arabiaVeneficaDemon:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_VENEFICA_DEMON',

    },
    Roc:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_ROC',

    },
    arabiaTiehfBoss:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_THIEF_BOSS',

    },
    mag1Roc:{
        type: DataTypes.INTEGER,
        field: 'MOB_MAG_1ROC',

    },
    ghostUndineB1:{
        type: DataTypes.INTEGER,
        field: 'MOB_GOD_GHOST_UNDINE_B1',

    },
    fwMujigi50:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_050',

    },
    haroeris:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_HAROERIS',

    },
    arabiaMustafa3:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MUSTAFA3',

    },
    phy2Roc:{
        type: DataTypes.INTEGER,
        field: 'MOB_PHY_2ROC',

    },
    anubis:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_ANUBIS',

    },
    seth:{
        type: DataTypes.INTEGER,
        field: 'MOB_SD_SETH',

    },
    jupiterBaal:{
        type: DataTypes.INTEGER,
        field: 'MOB_JUPITER_BAAL',

    },
    winterPrincess90:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_PRINCESS_90',

    },
    winterWhiteKnight90:{
        type: DataTypes.INTEGER,
        field: 'MOB_EV_WINTER_WHITEKNIGHT_90',

    },
    ivyL2:{
        type: DataTypes.INTEGER,
        field: 'MOB_AM_IVY_L2',

    },
    uniqueInt:{
        type: DataTypes.INTEGER,
        field: 'MOB_NEW_UNIQUE_INT',

    },
    uniqueStr:{
        type: DataTypes.INTEGER,
        field: 'MOB_NEW_UNIQUE_STR',

    },
    arabiaMadGeneral:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_MAD_GENERAL',

    },
    tigerGirlL2:{
        type: DataTypes.INTEGER,
        field: 'MOB_CH_TIGERWOMAN_L2',

    },
    arabiaLaunatune:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_LAUNATUNE',

    },
    fwMujigi20:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_020',

    },
    fwMujigi25:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_025',

    },
    fwMujigi15:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_015',

    },
    fwHyongheon10:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_010',

    },
    fwHyongheon50:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_050',

    },
    fwMujigi40:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_040',

    },
    fwHyongheon30:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_030',

    },
    fwMujigi30:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_030',

    },
    mangnyangEvil:{
        type: DataTypes.INTEGER,
        field: 'MOB_CH_MANGNYANG_EVIL',

    },
    ghostUndineB4:{
        type: DataTypes.INTEGER,
        field: 'MOB_GOD_GHOST_UNDINE_B4',

    },
    tample:{
        type: DataTypes.INTEGER,
        field: 'MOB_JOB_TAMPLE',

    },
    arabiaGarden1:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN1',

    },
    arabiaGarden2:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN2',

    },
    arabiaGarden3:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_GARDEN3',

    },
    arabiaGeenie:{
        type: DataTypes.INTEGER,
        field: 'MOB_ARABIA_GEENIE',

    },
    fwHyongheon15:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_HYEONGCHEON_015',

    },
    fwMujigi2:{
        type: DataTypes.INTEGER,
        field: 'MOB_FW_MUJIGI_002',

    },
    tahometL2:{
        type: DataTypes.INTEGER,
        field: 'MOB_RM_TAHOMET_L2',

    },
    anupisL2:{
        type: DataTypes.INTEGER,
        field: 'MOB_PHY_1ANUPIS',

    },
    isis1:{
        type: DataTypes.INTEGER,
        field: 'MOB_PHY_1ISIS',
    },
    killDate:{
        type: DataTypes.STRING,
        field: 'KILL_DATE'
    }
},{
    sequelize: shardDB,
    freezeTableName: true,
    tableName: 'UniqueRanking',
    createdAt: false,
    updatedAt: false
})
