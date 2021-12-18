import { Char } from "../../entities/shard/_Char";

export interface CharRepository {
    findCharById: (Id: number) => Promise<Char[] | null>
}

export default async function ShardRepository(): Promise<CharRepository> {
    return {
        findCharById: async (Id: number) => await Char.findAll({
            attributes: ['CharName16'],
            where: { CharID : Id }
        })
    };
}
