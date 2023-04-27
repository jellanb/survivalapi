import { ResetPasswordLog } from "../../entities/sro_dev/ResetPasswordLog";
import {DATE, Op} from "sequelize";


export interface ResetPasswordLogRepository{
    getCurrentCode: (username: string) => Promise<ResetPasswordLog | null>,
    generateCode: (username: string, code:string, email:string) => Promise<ResetPasswordLog | undefined>
}

export function ResetPasswordLogRepository(): ResetPasswordLogRepository {
    return {
        getCurrentCode: async (username: string) => await ResetPasswordLog.findOne({
            where: { username: username, expiredDate: { [Op.gte]: new Date(Date.now() + 5) } }
        }),
        generateCode: async (username: string, code:string, email:string) => {
            try {
                const result = await  ResetPasswordLog.create({
                    hashCode: code,
                    username: username,
                    createdDate: new Date(Date.now()),
                    email: email,
                    expiredDate: new Date(Date.now() + 5)
                })
                return result
            } catch (e) {
                console.log(e)
            }
        }
    }
}

export default ResetPasswordLogRepository();