import { RefObjCommon } from "../../entities/shard/_RefObjCommon"

export interface RefObjCommonRepository{
    findName: (itemDescription: string) => Promise<RefObjCommon | null>
    findById: (id: string) => Promise<RefObjCommon | null>
}

export function RefObjCommonRepository(): RefObjCommonRepository {
    return {
        findName: async (itemDescription) => await RefObjCommon.findOne({
            where: { name_object : itemDescription }
        }),
        findById: async (id) => await RefObjCommon.findOne({
            where: { id : id }
        })
    }
}

export default RefObjCommonRepository()