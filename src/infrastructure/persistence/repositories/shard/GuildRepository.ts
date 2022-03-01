import { Guild } from '../../entities/shard/_Guild'

export interface GuildRepository {
    getGuildOccupiedFortressByIds: (Id: number) => Promise<Guild | null>
}

export function GuildRepository() : GuildRepository {
    return {
        getGuildOccupiedFortressByIds: async (Id: number) => await Guild.findOne({
            attributes: ['Name'],
            where: {ID: Id}
        })
    };
}

export default GuildRepository();
