import log from "../../infrastructure/observability/logging/logger";
import {UserRepository} from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import { ResetPasswordLogRepository } from "../../infrastructure/persistence/repositories/sro_dev/ResetPasswordLogRepository";
import {SystemRepository} from "../../infrastructure/persistence/repositories/system/systemRepository";
import { SendEmailService } from "../../infrastructure/service/email/send-email";


export default async function resetPassword(
        username: string,
        userRepository: UserRepository,
        resetPasswordLogRepository: ResetPasswordLogRepository,
        systemRepository: SystemRepository,
        sendEmailService: SendEmailService
    ){
    log.info(`Init reset password from web site with username:${username}`);
    const userExist = await userRepository.findUserByName(username);
    let message = 'CODE_IS_NOT_EXPIRED';
    if(!userExist) throw new Error('USER_NOT_FOUND');

    const email = userExist.getDataValue('Email');

    log.info(`finding code to reset password for username; ${username} and email: ${email}`)
    const currentCode = await resetPasswordLogRepository.getCurrentCode(username);


    if (currentCode === null){
        log.info(`Code not found to reset password for username; ${username} and email: ${email}`)
        message = 'CODE_GENERATED';
        const code = generateCode();
        await resetPasswordLogRepository.generateCode(username, code, email);
        await sendEmailService.SendEmail(email, `Your code to reset password is: ${code}`)
    } else {
        const code = currentCode.getDataValue('hashCode');
        await sendEmailService.SendEmail(email, `Hello, Your code to reset password is: ${code}`);
        log.info(`Code founded to reset password for username; ${username} and email: ${email}`)
    }
    log.info(`Finish reset password from web site with username:${username}`);
    return { email, message }
}

function generateCode(): string {
    return Math.floor(100000 + Math.random() * 900000).toString()
}