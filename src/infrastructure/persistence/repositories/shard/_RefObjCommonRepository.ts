import { RefObjCommon } from "../../entities/shard/_RefObjCommon"

export interface RefObjCommonRepository{
    findName: (itemDescription: string) => Promise<RefObjCommon | null>
}

export function RefObjCommonRepository(): RefObjCommonRepository {
    return {
        findName: async (itemDescription) => await RefObjCommon.findOne({
            where: { name_object : itemDescription }
        })
    }
}

export default RefObjCommonRepository()