import { UniqueDrops } from "../../infrastructure/persistence/entities/job/UniqueDrops";
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


    try {
        const uniques = await uniqueDropsRepository.findAll();
        for await (const unique of uniques) {
            const uniqueName = unique.getDataValue('Unique_Name');
            const uniquesOriginal = await uniqueDropsRepository.findByName(uniqueName);
            await processUniqueDrop(uniquesOriginal)
        }
        console.log('[Survival-api] Verify unque drops done!')
    } catch (e) {
        console.log(e)
    }

    async function processUniqueDrop(uniquesOriginal:  UniqueDrops[]){
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