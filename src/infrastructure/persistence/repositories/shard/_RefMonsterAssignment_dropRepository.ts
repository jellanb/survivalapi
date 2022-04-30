import { MonsterAssignmentDrop } from "../../entities/shard/_RefMonsterAssignmentDrop"

export interface MonsterAssignmentDropRepository{
    findById: (id: number) => Promise<MonsterAssignmentDrop[]>
}

export function MonsterAssignmentDropRepository(): MonsterAssignmentDropRepository {
    return {
        findById: async (id) => await MonsterAssignmentDrop.findAll({
            where: { monster_id : [id] }
        })
    }
}

export default MonsterAssignmentDropRepository()