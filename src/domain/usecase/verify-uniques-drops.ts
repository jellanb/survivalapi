import { UniqueDrios } from "../../infrastructure/persistence/entities/job/UniqueDrops";
import { MonsterAssignmentDropRepository } from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import { RefObjCommonRepository } from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import { UniqueDropsRepository } from "../../infrastructure/persistence/repositories/sro_dev/UniqueDropsRepository";
import { UniqueItemsDropsRepository } from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";

interface Uniques {
    uniqueName: string,
    items: Array<Items>
}

interface Items {
    itemName: string
}

interface UniqueDropData {
    id:number,
    unique_name:string,
    unique_group:string,
    created_date:Date,
    update_date: Date
}

export async function verifyUniquesDrop(
    refAssignmentDropRepository: MonsterAssignmentDropRepository,
    refObjCommonRepository: RefObjCommonRepository,
    uniqueDropsRepository: UniqueDropsRepository,
    uniqueItemsDropsRepository: UniqueItemsDropsRepository) {
    const uniquesJob = [
        'MOB_SD_ISIS',
        'MOB_SD_SETH_DROP',
        'MOB_SD_NEITH',
        'MOB_SD_ANUBIS'
    ];

    const uniquesTitans = [
        'MOB_CH_TIGERWOMAN_L3',
        'MOB_OA_URUCHI_L3',
        'MOB_EU_KERBEROS_L3',
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

    try {
        await startUniqueDropVeriy(uniquesJob);
        await startUniqueDropVeriy(uniquesTitans);
        await startUniqueDropVeriy(uniquesTitans);
    } catch (e) {
        console.log(e)
    }

    async function startUniqueDropVeriy (uniques: Array<string>){
        uniques.map(async (unique) => {
            const uniquesOriginal = await uniqueDropsRepository.findByName(unique);
            await processUniqueDrop(uniquesOriginal)
        })
        console.log('[Survival-api] Verify unque drops done!')
    }

    async function processUniqueDrop(uniquesOriginal:  UniqueDrios[]){
        for await (const uniqueOriginal of uniquesOriginal) {
            const items = await uniqueItemsDropsRepository.findById(uniqueOriginal.getDataValue('id'));
            if(!items) throw new Error('ItemFoundExceptions')
            for await (const item of items) {
                const monsterId = item.getDataValue('monster_code');
                const itemId = item.getDataValue('item_code');
                const dropMin = item.getDataValue('drop_min');
                const dropMax = item.getDataValue('drop_max');
                const dropRatio = item.getDataValue('drop_ratio');
                console.log(`buscando monster id: ${monsterId} for item id: ${itemId} drop min:${dropMin} drop max:${dropMax} drop ratio: ${dropRatio}`);
                const currentDrop = await refAssignmentDropRepository.findById(monsterId, itemId);
                if (!currentDrop) {
                    console.log(`updating monster id: ${monsterId} for item id: ${itemId}`);
                    await refAssignmentDropRepository.create(monsterId, itemId, dropRatio, dropMin, dropMax);
                }
            }
        }
    }
}