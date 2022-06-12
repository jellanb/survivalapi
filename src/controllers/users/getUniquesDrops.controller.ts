import {getUniquesDrops} from "../../domain/usecase/get-uniques-drops";
import MonsterAssignmentDropRepository from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import RefObjCommonRepository from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import UniqueDropsRepository from "../../infrastructure/persistence/repositories/sro_dev/UniqueDropsRepository";
import UniqueItemsDropsRepository from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";

export default async function getUniquesDropsController() {
    return await getUniquesDrops(MonsterAssignmentDropRepository, RefObjCommonRepository, UniqueDropsRepository, UniqueItemsDropsRepository);
}