import { UserAndChar } from "../../entities/shard/_User";

export interface UserRepository{
    findUserById: (charId: number) => Promise<UserAndChar[] | null>
}

export default async function UserRepository(): Promise<UserRepository> {
    return {
        findUserById: async (charId: number) => await UserAndChar.findAll({
            attributes: ['UserJID'],
            where: { charId }
        })
    };
}
