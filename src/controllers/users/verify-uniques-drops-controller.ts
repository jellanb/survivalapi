import MonsterAssignmentDropRepository from "../../infrastructure/persistence/repositories/shard/_RefMonsterAssignment_dropRepository";
import RefObjCommonRepository from "../../infrastructure/persistence/repositories/shard/_RefObjCommonRepository";
import { verifyUniquesDrop } from '../../domain/usecase/verify-uniques-drops';
import UniqueDropsRepository from "../../infrastructure/persistence/repositories/sro_dev/UniqueDropsRepository";
import UniqueItemsDropsRepository from "../../infrastructure/persistence/repositories/sro_dev/UniqueItemsDropsRepository";

export default async function verifyUniquesDropsController(){
    return verifyUniquesDrop(MonsterAssignmentDropRepository, RefObjCommonRepository, UniqueDropsRepository, UniqueItemsDropsRepository);
}