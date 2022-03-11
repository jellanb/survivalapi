import { ExecuteOrderPaymentRequest } from '../../infrastructure/service/payment/execute-order-payment-request'
import { SurvivalLogger } from '../../infrastructure/observability/logging/logger';
import {UserRepository} from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import {SilkRepository} from "../../infrastructure/persistence/repositories/shard/SilkRepository";

interface userResult {
    StrUserID:string,
    JID:number,
    Email: string,
    password:string
}

interface SilkFromUser {
    silk_own: number
}
interface OrderPaymentResult {
    username: string | undefined,
    silkRequest: string | undefined,
    totalSilk: number,
    state: string
}

export default async function ExecuteOrderPayment(username: string,
                                                  silkRequest: string,
                                                  token: string,
                                                  executeOrderPayment: ExecuteOrderPaymentRequest,
                                                  logger: SurvivalLogger,
                                                  userRepository: UserRepository,
                                                  silkRepository: SilkRepository): Promise<OrderPaymentResult> {
    const totalSilk = 0;

    logger.info(`Init process payment request for username ${username} with silk quantity:${silkRequest}`);
    if (executeOrderPayment.orderPaymentRequest(token)) {
        logger.info(`Init process to add silk to username: ${username} silk amount: ${silkRequest}`);
        const user = await userRepository.findUserByName(username);

        if (!user) throw Error(`username ${username} not exist!`);
        logger.debug(`Username found: ${username}`);

        const { JID }: userResult  = JSON.parse(JSON.stringify(user));
        if (!JID) throw Error(`JID not found`);
        logger.debug(`Init find silk data with id: ${JID}`);

        const silk = await silkRepository.findById(JID);
        if (silk) {
            logger.debug(`Silk data found with id: ${JID}`);
            const { silk_own }: SilkFromUser = JSON.parse(JSON.stringify(silk));
            const totalSilk = silk_own + parseInt(silkRequest);
            await silkRepository.update(JID, totalSilk);
        } else {
            logger.debug(`Silk data not found with id: ${JID}`);
            logger.debug(`Init add silk data to user with id: ${JID} and ${silkRequest}`);
            await silkRepository.add(JID, parseInt(silkRequest));
            logger.debug(`Finish add silk data to user with id: ${JID}`);
        }
        logger.info(`Finish process to add silk to username: ${username} silk amount adds ${silkRequest}`);
        return {
            username: username,
            silkRequest: silkRequest,
            totalSilk: totalSilk,
            state: 'success'
        }
    } else {
        return  {
            username: username,
            silkRequest: silkRequest,
            totalSilk: 0,
            state: 'failed'
        }
    }
}
