import { Char } from "../../entities/shard/_Char";

export interface CharRepository {
    findCharById: (Id: number) => Promise<Char[] | null>
}

export function ShardRepository(): CharRepository {
    return {
        findCharById: async (Id: number) => await Char.findAll({
            attributes: ['CharName16'],
            where: { CharID : Id }
        })
    };
}

export default ShardRepository();
