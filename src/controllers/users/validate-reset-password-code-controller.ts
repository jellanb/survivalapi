import validateResetPasswordCode from "../../domain/usecase/validate-reset-password-code.ts";
import UserRepository from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import ResetPasswordLogRepository from "../../infrastructure/persistence/repositories/sro_dev/ResetPasswordLogRepository";
import Net2eRepository from "../../infrastructure/persistence/repositories/shard/Net2eRepository";
import SendEmailService from "../../infrastructure/service/email/send-email";

export default async function validateResetPasswordCodeController(
    username: string,
    code: string
    ){
    return await validateResetPasswordCode(username, code, ResetPasswordLogRepository, UserRepository, Net2eRepository, SendEmailService)
}