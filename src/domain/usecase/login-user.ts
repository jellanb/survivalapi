import {Net2eRepository} from '../../infrastructure/persistence/repositories/shard/Net2eRepository';
import {UserRepository} from '../../infrastructure/persistence/repositories/shard/TB_UsersRepository';
import {SilkRepository} from "../../infrastructure/persistence/repositories/shard/SilkRepository";
import SurvivalLogger from "../../infrastructure/observability/logging/logger";

let loginResult = {
    userName: '',
    silk: 0,
    isSingIn: false,
    description: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    password: ''
}

interface userDetails {
    question: string,
    answer: string
}
interface SilkFromUser {
    silk_own: number
}
interface userResult {
    StrUserID:string,
    JID:number,
    Email: string,
    password:string
}

export async function LoginUser(username: string, pass: string, net2eRepository: Net2eRepository, userRepository: UserRepository, silkRepository: SilkRepository) {
    SurvivalLogger.info(`Init login to user; ${username} from web site`);
    const user = await userRepository.findUserByUsernamePassword(username, pass);

    if (!user) {
        SurvivalLogger.info(`Login failure to user ${username}`);
        loginResult.description = 'Usuario y contraseña incorrectos!';
        loginResult.isSingIn = false;
        return loginResult;
    }
        SurvivalLogger.info(`Login successfully to user ${username}`);
        const { StrUserID, JID, Email, password }:userResult  = JSON.parse(JSON.stringify(user));
        const silk = await silkRepository.findById(JID);
        const net2e = await net2eRepository.findByID(JID);
        loginResult.userName = StrUserID
        loginResult.isSingIn = true
        loginResult.description = 'Sesion iniciada correctamente!'
        loginResult.email = Email
        loginResult.password = password

        if (net2e) {
            const { question, answer }: userDetails = JSON.parse(JSON.stringify(net2e))
            loginResult.secretQuestion = question
            loginResult.secretAnswer = answer
        }

        if (silk) {
            const userSilk = JSON.parse(JSON.stringify(silk))
            const silkRes: SilkFromUser = userSilk
            loginResult.silk = silkRes.silk_own
        }
        return loginResult;
}
