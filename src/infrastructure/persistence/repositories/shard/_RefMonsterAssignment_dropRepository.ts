import { MonsterAssignmentDrop } from "../../entities/shard/_RefMonsterAssignmentDrop"

export interface MonsterAssignmentDropRepository{
    findById: (id: number, itemId: number) => Promise<MonsterAssignmentDrop | null>
    create: (monsterId: number, itemId: number, dropRatio: number, dropMin: number, dropMax: number) => Promise<MonsterAssignmentDrop>
    update: (monsterId: number, itemId: number, dropRatio: number, dropMin: number, dropMax: number) => Promise<void>
}

export function MonsterAssignmentDropRepository(): MonsterAssignmentDropRepository {
    return {
        findById: async (id, itemId) => await MonsterAssignmentDrop.findOne({
            where: {monster_id: [id], item_id: itemId}
        }),
        create: async (monsterId, itemId, dropRatio, dropMin, dropMax): Promise<MonsterAssignmentDrop> => {
            const setMonsterAssignmentDrop = await MonsterAssignmentDrop.create({
                monster_id: monsterId,
                item_id: itemId,
                drop_group: 0,
                plus: 0,
                drop_min_quantity: dropMin,
                drop_max_quantity: dropMax,
                drop_radio: dropRatio,
                magic_option: 0,
                custom_value: 0,
                magic_option_2: 0,
                custom_value_2: 0,
                magic_option_3: 0,
                custom_value_3: 0,
                magic_option_4: 0,
                custom_value_4: 0,
                magic_option_5: 0,
                custom_value_5: 0,
                magic_option_6: 0,
                custom_value_6: 0,
                magic_option_7: 0,
                custom_value_7: 0,
                magic_option_8: 0,
                custom_value_8: 0,
                magic_option_9: 0,
                custom_value_9: 0,
                rent_code_name: 'xxx'
            })
            return setMonsterAssignmentDrop
        },
        update: async (monsterId, itemId, dropRatio, dropMin, dropMax) => {
            await MonsterAssignmentDrop.update({
                monster_id: monsterId,
                item_id: itemId,
                drop_group: 0,
                plus: 0,
                drop_min_quantity: dropMin,
                drop_max_quantity: dropMax,
                drop_radio: dropRatio,
                magic_option: 0,
                custom_value: 0,
                magic_option_2: 0,
                custom_value_2: 0,
                magic_option_3: 0,
                custom_value_3: 0,
                magic_option_4: 0,
                custom_value_4: 0,
                magic_option_5: 0,
                custom_value_5: 0,
                magic_option_6: 0,
                custom_value_6: 0,
                magic_option_7: 0,
                custom_value_7: 0,
                magic_option_8: 0,
                custom_value_8: 0,
                magic_option_9: 0,
                custom_value_9: 0,
                rent_code_name: 'xxx'
            },{
                where: {
                    monster_id: monsterId,
                    item_id: itemId
                }
            })
        }
    }
}

export default MonsterAssignmentDropRepository();