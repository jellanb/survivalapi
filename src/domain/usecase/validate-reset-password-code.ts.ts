import log from "../../infrastructure/observability/logging/logger";
import {
    ResetPasswordLogRepository
} from "../../infrastructure/persistence/repositories/sro_dev/ResetPasswordLogRepository";
import {UserRepository} from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import {Net2eRepository} from "../../infrastructure/persistence/repositories/shard/Net2eRepository";
import md5 from 'js-md5';
import {SendEmailService} from "../../infrastructure/service/email/send-email";


export default async function validateResetPasswordCode(
    username: string,
    code: string,
    resetPasswordLogRepository: ResetPasswordLogRepository,
    userRepository: UserRepository,
    nNet2eRepository: Net2eRepository,
    sendEmailService: SendEmailService
    ){
    log.info(`Init process to reset password with secret code to username: ${username}`);
    const currentCode = await resetPasswordLogRepository.getCurrentCode(username);
    console.log(code)
    if (currentCode === null) throw new Error('USER_WITH_OUT_CODE');
    const dbCode = currentCode.getDataValue('hashCode');
    console.log(dbCode)
    if (dbCode !== code) throw new Error('CODE_NOT_MATCHED');

    const user = await userRepository.findUserByName(username);
    const { JID, Email } = JSON.parse(JSON.stringify(user));

    const newPassword = generatePassword();

    const passwordHex = md5.hex(newPassword);

    await userRepository.updateUserById(JID, passwordHex, Email);
    await nNet2eRepository.update(JID, passwordHex);

    await sendEmailService.SendEmail(Email, `Your new password is: ${newPassword}`);

    log.info('Finish process to reset password with secret code');

    return { email: Email, message: 'RESET_PASSWORD_SUCCESS_FULLY' }
}

function generatePassword(): string {
    const length = 10;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let password = '';
    for (let i = 0; i < length; i++) {
        password += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return password;
}