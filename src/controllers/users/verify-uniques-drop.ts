import { MonsterAssignmentDropRepository } from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import { RefObjCommonRepository } from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";



export function verifyUniquesDrop(
    refAssignmentDropRepository: MonsterAssignmentDropRepository,
    refObjCommonRepository: RefObjCommonRepository) {
    const uniquesJob = [
        'MOB_SD_ISIS',
        'MOB_SD_SETH_DROP',
        'MOB_SD_NEITH',
        'MOB_SD_ANUBIS'
    ];

    const uniquesTitans = [
        'MOB_CH_TIGERWOMAN_L3',
        'MOB_OA_URUCHI_L3',
        'MOB_EU_KERBERUS_L3',
        'MOB_AM_IVY_L3',
        'MOB_KK_ISYUTARU_L3',
        'MOB_TK_BONELORD_L3',
        'MOB_RM_TAHOMET_L3',
        'MOB_TQ_BLACKSNAKE_L3'
    ];

    const uniques110 = [
        'MOB_TQ_WHITESNAKE',
        'MOB_JUPITER_BAAL',
        'MOB_JUPITER_THE_EARTH2',
        'MOB_JUPITER_DARK_DOG2',
        'MOB_JUPITER_YUNO',
    ];

    const ref = refObjCommonRepository.findName('')


}