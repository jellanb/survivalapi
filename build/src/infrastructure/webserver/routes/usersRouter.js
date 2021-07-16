"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const UsersRepository_1 = require("../../persistence/repositories/UsersRepository");
const SilkRepository_1 = require("../../persistence/repositories/SilkRepository");
const Net2eRepository_1 = require("../../persistence/repositories/Net2eRepository");
const create_new_user_1 = __importDefault(require("../../../domain/usecase/create-new-user"));
const edit_user_account_1 = require("../../../domain/usecase/edit-user-account");
let userNameResult = {
    isValid: false
};
let userPasswordResponse = {
    userName: '',
    silk: 0,
    isSingIn: false,
    description: '',
    email: '',
    secretQuestion: '',
    secretAnswer: '',
    password: ''
};
const router = express_1.default.Router();
router.get('/GetUserByName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const user = yield UsersRepository_1.findUserByName(req.query.username.toString());
    userNameResult.isValid = false;
    if (user) {
        userNameResult.isValid = true;
    }
    yield res.send(userNameResult);
    yield res.status(200);
}));
router.get('/EmailByEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const emailValid = yield UsersRepository_1.findUserByEmail(req.query.email.toString());
    yield res.send({ isValid: emailValid !== undefined ? false : true });
    yield res.status(200);
}));
router.get('/UserByNamePassword', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const user = yield UsersRepository_1.findUserByUsernamePassword(req.query.username.toString(), req.query.password.toString());
    if (!user) {
        userPasswordResponse.description = 'Usuario y contraseña incorrectos!';
        userPasswordResponse.isSingIn = false;
    }
    if (user) {
        const { StrUserID, JID, Email, password } = JSON.parse(JSON.stringify(user));
        const silk = yield SilkRepository_1.findSilkById(JID);
        const net2e = yield Net2eRepository_1.findById(JID);
        userPasswordResponse.userName = StrUserID;
        userPasswordResponse.isSingIn = true;
        userPasswordResponse.description = 'Sesion iniciada correctamente!';
        userPasswordResponse.email = Email;
        userPasswordResponse.password = password;
        if (net2e) {
            const { question, answer } = JSON.parse(JSON.stringify(net2e));
            userPasswordResponse.secretQuestion = question;
            userPasswordResponse.secretAnswer = answer;
        }
        if (silk) {
            const userSilk = JSON.parse(JSON.stringify(silk));
            const silkRes = userSilk;
            console.log(silkRes);
            console.log(silkRes.silk_own);
            userPasswordResponse.silk = silkRes.silk_own;
        }
    }
    yield res.send(userPasswordResponse);
    yield res.status(200);
}));
router.post('/SaveUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield create_new_user_1.default(req.query.username.toString(), req.query.lastName.toString(), req.query.email.toString(), req.query.password.toString(), req.query.secretQuestion.toString(), req.query.secretAnswer.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
}));
router.post('/EditAccount', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield edit_user_account_1.editUserAccount(req.query.username.toString(), req.query.password.toString(), req.query.email.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
}));
module.exports = router;
