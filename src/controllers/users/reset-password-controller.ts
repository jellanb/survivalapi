import resetPassword from "../../domain/usecase/reset-password";
import UserRepository from "../../infrastructure/persistence/repositories/shard/TB_UsersRepository";
import ResetPasswordLogRepository from "../../infrastructure/persistence/repositories/sro_dev/ResetPasswordLogRepository";
import SystemRepository from "../../infrastructure/persistence/repositories/system/systemRepository";
import SendEmailService from "../../infrastructure/service/email/send-email";


export const resetPasswordController = async (username: string) => {
    return await resetPassword(username, UserRepository, ResetPasswordLogRepository, SystemRepository, SendEmailService)
}