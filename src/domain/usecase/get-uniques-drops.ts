import { MonsterAssignmentDropRepository } from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import { RefObjCommonRepository } from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import { UniqueDropsRepository } from "../../infrastructure/persistence/repositories/sro_dev/UniqueDropsRepository";
import { UniqueItemsDropsRepository } from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";

interface Uniques {
    uniqueName: string,
    items: Array<Items>
}

interface Items {
    id: number
    monsterCode: string,
    itemName: string,
    dropRatio: number,
    minDrop: number,
    maxDrop: number
}

export async function getUniquesDrops(
    refAssignmentDropRepository: MonsterAssignmentDropRepository,
    refObjCommonRepository: RefObjCommonRepository,
    uniqueDropsRepository: UniqueDropsRepository,
    uniqueItemsDropsRepository: UniqueItemsDropsRepository) {

    try {
        const uniques = await uniqueDropsRepository.findAll();
        let resulUniqueDrop: Array<Uniques> = [];
        for await (const unique of uniques) {
            const uniqueName = unique.getDataValue('Unique_Name');
            const itemsDetails: Array<Items> = [];
            const uniquesOriginal = await uniqueDropsRepository.findByName(uniqueName);
            for await (const uniqueOriginal of uniquesOriginal) {
                const items = await uniqueItemsDropsRepository.findById(uniqueOriginal.getDataValue('id'));
                if(!items) throw new Error('ItemFoundExceptions')
                for await (const item of items) {
                    const id = item.getDataValue('id')
                    const monsterId = item.getDataValue('monster_code');
                    const itemId = item.getDataValue('item_code');
                    const dropMin = item.getDataValue('drop_min');
                    const dropMax = item.getDataValue('drop_max');
                    const dropRatio = item.getDataValue('drop_ratio');
                    const itemDetail = await refObjCommonRepository.findById(itemId);
                    itemsDetails.push({
                        id,
                        monsterCode: monsterId,
                        itemName: itemDetail?.getDataValue('name_object'),
                        dropRatio,
                        maxDrop: dropMax,
                        minDrop: dropMin
                    })
                }
                resulUniqueDrop.push({
                    uniqueName,
                    items: itemsDetails
                })
            }
        }
        return resulUniqueDrop
    } catch (e) {
        console.log(e)
    }
}