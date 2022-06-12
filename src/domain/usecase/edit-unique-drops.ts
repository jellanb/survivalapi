import {
    MonsterAssignmentDropRepository
} from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import {RefObjCommonRepository} from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import {UniqueDropsRepository} from "../../infrastructure/persistence/repositories/sro_dev/UniqueDropsRepository";
import {
    UniqueItemsDropsRepository
} from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";

export interface DropAssignmentSetting {
    uniqueName: string,
    itemName: string,
    provability: number,
    dropMax: number,
    dropMin: number
}

export default async function editUniqueDrops(dropAssignmentSetting: DropAssignmentSetting,
    refAssignmentDropRepository: MonsterAssignmentDropRepository,
    refObjCommonRepository: RefObjCommonRepository,
    uniqueItemsDropsRepository: UniqueItemsDropsRepository) {

    const unique = await refObjCommonRepository.findName(dropAssignmentSetting.uniqueName);
    const item = await refObjCommonRepository.findName(dropAssignmentSetting.itemName);
    if (!item) throw new Error(`RefObjCommonRepositoryException itemName not found ${dropAssignmentSetting.itemName}`);
    if (!unique) throw new Error(`RefObjCommonRepositoryException uniqueName not found ${dropAssignmentSetting.uniqueName}`);
    const uniqueId: number = unique.getDataValue('id');
    const itemId: number = item.getDataValue('id');
    const assignmentDrop = await refAssignmentDropRepository.findById(uniqueId,itemId);
    if (!assignmentDrop) throw new Error(`refAssignmentDropRepository assignment drop not found where unique id: ${uniqueId}, item id: ${itemId}`);

    await refAssignmentDropRepository.update(uniqueId, itemId, dropAssignmentSetting.provability, dropAssignmentSetting.dropMin, dropAssignmentSetting.dropMax)

    const uniqueDrop = await uniqueItemsDropsRepository.findByIdAndItemCode(uniqueId, itemId);
    if (!uniqueDrop) throw new Error(`UniqueItemsDropsRepositoryException unique drop not found for unique id:${uniqueId} and item id:${itemId}`);
    const itemDropId = uniqueDrop.getDataValue('id');
    console.log(`Init updating uniqueItemsDrop with id: ${itemDropId}`);
    await uniqueItemsDropsRepository.update({
        id: itemDropId,
        provability: dropAssignmentSetting.provability,
        maxDrop: dropAssignmentSetting.dropMax,
        minDrop: dropAssignmentSetting.dropMin
    })
    console.log(`Finish updating uniqueItemsDrop with id: ${itemDropId}`);
}