import { AccountJID } from "../../entities/shard/_AccountJID";

export interface AccountRepository{
    findAccountById: (id: number) => Promise<AccountJID[] | null>
}

export default async function AccountJidRepository(): Promise<AccountRepository> {
    return {
        findAccountById: async (id: number) => await AccountJID.findAll({
            attributes: ['AccountID'],
            where: { JID: id }
        })
    };
}
