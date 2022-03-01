import { UserRepository }  from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import { SilkRepository } from '../../infrastructure/persistence/repositories/shard/SilkRepository';
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

export default async function (username: string, silkPay: string, userRepository: UserRepository, silkRepository: SilkRepository) {
    SurvivalLogger.info(`Init process to add silk to username: ${username} silk amount: ${silkPay}`);
    SurvivalLogger.info(`Init find username: ${username}`);
    const user = await userRepository.findUserByName(username);
    if (!user) throw Error(`username ${username} not exist!`);
    SurvivalLogger.info(`Username found: ${username}`);

    const { JID }: userResult  = JSON.parse(JSON.stringify(user));
    if (!JID) throw Error(`JID not found`);

    SurvivalLogger.info(`Init find silk data with id: ${JID}`);
    const silk = await silkRepository.findById(JID);
    if (silk) {
        SurvivalLogger.info(`Silk data found with id: ${JID}`);
        const { silk_own }: SilkFromUser = JSON.parse(JSON.stringify(silk));
        const silkQuantity = silk_own + parseInt(silkPay);
        await silkRepository.update(JID, silkQuantity);
    } else {
        SurvivalLogger.info(`Silk data not found with id: ${JID}`);
        SurvivalLogger.info(`Init add silk data to user with id: ${JID} and ${silkPay}`);
        await silkRepository.add(JID, parseInt(silkPay));
        SurvivalLogger.info(`Finish add silk data to user with id: ${JID}`);
    }
    SurvivalLogger.info(`Finish process to add silk to username: ${username} silk amount adds ${silkPay}`);
}
