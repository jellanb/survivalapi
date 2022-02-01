import { Guild } from '../../entities/shard/_Guild'

export interface GuildRepository {
    getGuildOccupiedFortressByIds: (Id: number) => Promise<Guild | null>
}

export async function GuildRepository() : Promise<GuildRepository> {
    return {
        getGuildOccupiedFortressByIds: async (Id: number) => await Guild.findOne({
            attributes: ['Name'],
            where: {ID: Id}
        })
    };
}
