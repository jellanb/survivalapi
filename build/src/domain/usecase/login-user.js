"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginUser = void 0;
const logger_1 = __importDefault(require("../../infrastructure/observability/logging/logger"));
let loginResult = {
    userName: '',
    silk: 0,
    isSingIn: false,
    description: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    password: ''
};
async function LoginUser(username, pass, net2eRepository, userRepository, silkRepository) {
    logger_1.default.info(`Init sing in to user; ${username} from web site`);
    const user = await userRepository.findUserByUsernamePassword(username, pass);
    if (!user) {
        logger_1.default.info(`Sing in failure to user ${username}`);
        loginResult.description = 'Usuario y contraseña incorrectos!';
        loginResult.isSingIn = false;
    }
    logger_1.default.info(`Sing in successfully to user ${username}`);
    const { StrUserID, JID, Email, password } = JSON.parse(JSON.stringify(user));
    const silk = await silkRepository.findById(JID);
    const net2e = await net2eRepository.findByID(JID);
    loginResult.userName = StrUserID;
    loginResult.isSingIn = true;
    loginResult.description = 'Sesion iniciada correctamente!';
    loginResult.email = Email;
    loginResult.password = password;
    if (net2e) {
        const { question, answer } = JSON.parse(JSON.stringify(net2e));
        loginResult.secretQuestion = question;
        loginResult.secretAnswer = answer;
    }
    if (silk) {
        const userSilk = JSON.parse(JSON.stringify(silk));
        const silkRes = userSilk;
        loginResult.silk = silkRes.silk_own;
    }
    return loginResult;
}
exports.LoginUser = LoginUser;
