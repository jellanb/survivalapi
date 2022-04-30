import {UserRepository} from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import {SilkRepository} from "../../infrastructure/persistence/repositories/shard/SilkRepository";
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

interface userResult {
    StrUserID:string,
    JID:number,
    Email: string,
    password:string
}
interface SilkFromUser {
    silk_own: number
}

export default async function (username: string, silkRollBack: number, userRepository: UserRepository, silkRepository: SilkRepository) {
    SurvivalLogger.info(`Init process to rolling back transaction by username ${username} and silk: ${silkRollBack}`);
    const user = await userRepository.findUserByName(username);
    if (!user) throw Error(`username ${username} not exist!`);
    SurvivalLogger.info(`Username found: ${username}`);

    const { JID }: userResult  = JSON.parse(JSON.stringify(user));
    if (!JID) throw Error(`JID not found`);
    SurvivalLogger.info(`Init find silk data with id: ${JID}`);
    const silk = await silkRepository.findById(JID);
    SurvivalLogger.info(`Silk data found with id: ${JID}`);
    const { silk_own }: SilkFromUser = JSON.parse(JSON.stringify(silk));
    const silkQuantity = silk_own - silkRollBack;
    await silkRepository.update(JID, silkQuantity);
    SurvivalLogger.info(`Finish process to rolling back transaction by username ${username} and silk: ${silkRollBack}`);
}