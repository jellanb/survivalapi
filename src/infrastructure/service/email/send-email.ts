import nodemailer from 'nodemailer';
import config from "../../../utils/config";
import log from "../../../infrastructure/observability/logging/logger";

export interface SendEmailService {
    SendEmail(email: string,msg: string): Promise<boolean>
}

export function SendEmailService(): SendEmailService {
    return {
        async SendEmail(email: string, msg: string): Promise<boolean> {
            const transporter = await nodemailer.createTransport({
                host: "smtp-mail.outlook.com",
                service: "Outlook365",
                auth:{
                    user: config.userEmail,
                    pass: config.passEmail
                }
            });

            const mailOptions = {
                from: config.userEmail,
                to: email,
                subject: 'Reset Password Code',
                text: msg
            };

            log.info(`Sending email to email address: ${email}`);
            await transporter.sendMail(mailOptions);
            log.info(`Email sent to email address: ${email}`);
            return true;
        }
    }

}

export default SendEmailService();