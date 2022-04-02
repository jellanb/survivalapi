import { UserAndChar } from "../../entities/shard/_User";

export interface UserShardRepository{
    findUserById: (charId: number) => Promise<UserAndChar[] | null>
}

export function UserShardRepository(): UserShardRepository {
    return {
        findUserById: async (charId: number) => await UserAndChar.findAll({
            attributes: ['UserJID'],
            where: { charId }
        })
    };
}

export default UserShardRepository();
