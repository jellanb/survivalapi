import editUniqueDrops, {DropAssignmentSetting} from "../../domain/usecase/edit-unique-drops";
import RefObjCommonRepository from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import UniqueItemsDropsRepository from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";
import MonsterAssignmentDropRepository from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";


export default async function editUniqueDropsController(dropAssignmentSetting: DropAssignmentSetting) {
    await editUniqueDrops(dropAssignmentSetting, MonsterAssignmentDropRepository, RefObjCommonRepository, UniqueItemsDropsRepository);
}