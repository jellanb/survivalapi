"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const TB_UsersRepository_1 = require("../../persistence/repositories/shard/TB_UsersRepository");
const SilkRepository_1 = require("../../persistence/repositories/shard/SilkRepository");
const Net2eRepository_1 = require("../../persistence/repositories/shard/Net2eRepository");
const edit_user_account_1 = require("../../../domain/usecase/edit-user-account");
const createUserController_1 = require("../../../controllers/users/createUserController");
const joi_1 = __importDefault(require("joi"));
const lastUniqueKillController_1 = __importDefault(require("../../../controllers/users/lastUniqueKillController"));
const get_users_online_controller_1 = __importDefault(require("../../../controllers/users/get-users-online-controller"));
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
router.get('/getUserByName', async (req, res) => {
    await res.setHeader('Content-Type', 'application/json');
    const user = await (0, TB_UsersRepository_1.findUserByName)(req.query.username.toString());
    userNameResult.isValid = false;
    if (user) {
        userNameResult.isValid = true;
    }
    await res.send(userNameResult);
    await res.status(200);
});
router.get('/EmailByEmail', async (req, res) => {
    await res.setHeader('Content-Type', 'application/json');
    const emailValid = await (0, TB_UsersRepository_1.findUserByEmail)(req.query.email.toString());
    await res.send({ isValid: emailValid !== undefined ? false : true });
    await res.status(200);
});
router.get('/UserByNamePassword', async (req, res) => {
    await res.setHeader('Content-Type', 'application/json');
    const user = await (0, TB_UsersRepository_1.findUserByUsernamePassword)(req.query.username.toString(), req.query.password.toString());
    if (!user) {
        userPasswordResponse.description = 'Usuario y contraseña incorrectos!';
        userPasswordResponse.isSingIn = false;
    }
    if (user) {
        const { StrUserID, JID, Email, password } = JSON.parse(JSON.stringify(user));
        const silk = await (0, SilkRepository_1.findSilkById)(JID);
        const net2e = await (0, Net2eRepository_1.findById)(JID);
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
    await res.send(userPasswordResponse);
    await res.status(200);
});
router.post('/saveUser', async (req, res) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        lastname: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        secretQuestion: joi_1.default.string().required(),
        secretAnswer: joi_1.default.string().required(),
    });
    try {
        const { username, lastname, email, password, secretQuestion, secretAnswer } = req.query;
        const data = {
            username: username.toString(),
            lastname: lastname.toString(),
            email: email.toString(),
            password: password.toString(),
            secretQuestion: secretQuestion.toString(),
            secretAnswer: secretAnswer.toString()
        };
        await schema.validateAsync(data);
        if (joi_1.default.isError(schema))
            throw new Error('ALL_PARAMS_REQUIRED');
        const userResult = await (0, createUserController_1.createUserController)(data);
        if (userResult.username === username) {
            res.send(userResult);
            res.status(200);
        }
        else {
            res.send(userResult);
            res.status(500);
        }
    }
    catch (error) {
        res.send(error);
        res.status(500);
    }
});
router.post('/EditAccount', async (req, res) => {
    try {
        res.send(await (0, edit_user_account_1.editUserAccount)(req.query.username.toString(), req.query.password.toString(), req.query.email.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
});
router.get('/getUserLastUniqueKill', async (req, res) => {
    try {
        const lastKill = await (0, lastUniqueKillController_1.default)();
        res.send(lastKill);
    }
    catch (failure) {
        console.log(failure);
    }
});
router.post('/add-silk-after-payment', async (req, res) => {
    try {
        const user = await (0, TB_UsersRepository_1.findUserByName)(req.query.username.toString());
        console.log(`Init add silk after payment to user ${user}`);
        if (user) {
            const { JID } = JSON.parse(JSON.stringify(user));
            const silk = await (0, SilkRepository_1.findSilkById)(JID);
            if (silk) {
                const { silk_own } = JSON.parse(JSON.stringify(silk));
                const silkQuantity = silk_own + parseInt(req.query.silkQuantity.toString());
                await (0, SilkRepository_1.updateSilk)(JID, silkQuantity);
            }
            else {
                await (0, SilkRepository_1.createSilk)(JID, parseInt(req.query.silkQuantity.toString()));
            }
            console.log('payment success');
            res.send(user);
            res.status(200);
            res.end();
        }
    }
    catch (failure) {
        console.log(failure);
        res.status(500);
    }
});
router.get('/getQuantityUsersOnline', async (req, res) => {
    try {
        const usersOnline = await (0, get_users_online_controller_1.default)();
        res.send({ usersOnline: usersOnline });
        res.status(200);
    }
    catch (failure) {
        console.log(failure);
        res.status(500);
    }
});
module.exports = router;
