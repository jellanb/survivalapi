import express from 'express';
import {
    findUserByEmail,
    findUserByName,
    findUserByUsernamePassword
} from "../../persistence/repositories/shard/TB_UsersRepository";
import {createSilk, findSilkById, updateSilk} from "../../persistence/repositories/shard/SilkRepository";
import {findById} from "../../persistence/repositories/shard/Net2eRepository";
import {editUserAccount} from "../../../domain/usecase/edit-user-account";
import {createUserController} from "../../../controllers/users/createUserController";
import Joi from "joi";
import lastUniqueKillController from "../../../controllers/users/lastUniqueKillController";
import getUsersOnlineController from "../../../controllers/users/get-users-online-controller";

let userNameResult = {
    isValid: false
}

let userPasswordResponse = {
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

const router = express.Router()

router.get('/getUserByName', async (req,res) => {

    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const user = await findUserByName(req.query.username!.toString());
    userNameResult.isValid = false

    if (user) {
        userNameResult.isValid = true
    }
    await res.send(userNameResult);
    await res.status(200);
});

router.get('/EmailByEmail', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const emailValid = await findUserByEmail(req.query.email!.toString());
    await res.send({ isValid: emailValid !== undefined ? false : true });
    await res.status(200);
});

router.get('/UserByNamePassword', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const user = await findUserByUsernamePassword(req.query.username!.toString(), req.query.password!.toString());

    if (!user) {
        userPasswordResponse.description = 'Usuario y contraseña incorrectos!'
        userPasswordResponse.isSingIn = false
    }
    if (user) {
        const { StrUserID, JID, Email, password }:userResult  = JSON.parse(JSON.stringify(user))
        const silk = await findSilkById(JID)
        const net2e = await findById(JID)
        userPasswordResponse.userName = StrUserID
        userPasswordResponse.isSingIn = true
        userPasswordResponse.description = 'Sesion iniciada correctamente!'
        userPasswordResponse.email = Email
        userPasswordResponse.password = password

        if (net2e) {
            const { question, answer }: userDetails = JSON.parse(JSON.stringify(net2e))
            userPasswordResponse.secretQuestion = question
            userPasswordResponse.secretAnswer = answer
        }

        if (silk) {
            const userSilk = JSON.parse(JSON.stringify(silk))
            const silkRes: SilkFromUser = userSilk
            console.log(silkRes)
            console.log(silkRes.silk_own)
            userPasswordResponse.silk = silkRes.silk_own
        }
    }
    await res.send(userPasswordResponse);
    await res.status(200);
});

router.post('/saveUser', async (req,res) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        secretQuestion: Joi.string().required(),
        secretAnswer: Joi.string().required(),
    });

    try {
        const { username, lastname, email, password, secretQuestion, secretAnswer } = req.query;
        const data = {
            username: username!.toString(),
            lastname: lastname!.toString(),
            email: email!.toString(),
            password: password!.toString(),
            secretQuestion: secretQuestion!.toString(),
            secretAnswer: secretAnswer!.toString()
        }
        await schema.validateAsync(data);
        if (Joi.isError(schema)) throw new Error('ALL_PARAMS_REQUIRED');

        const userResult = await createUserController(data);

        if (userResult.username === username){
            res.send(userResult);
            res.status(200);
        } else {
            res.send(userResult);
            res.status(500);
        }
    }
    catch (error) {
        res.send(error);
        res.status(500);
    }
});

router.post('/EditAccount', async (req,res) => {
    try {
        res.send(
            await editUserAccount(req.query.username!.toString(), req.query.password!.toString(), req.query.email!.toString()))
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
});

router.get('/getUserLastUniqueKill', async (req, res) => {
    try {
        const lastKill = await lastUniqueKillController();
        res.send(lastKill);
    } catch (failure) {
        console.log(failure);
    }
});

router.post('/add-silk-after-payment', async (req,res) => {
    try {
        const user = await findUserByName(req.query.username!.toString())
        console.log(`Init add silk after payment to user ${user}`)
        if (user) {
            const {JID}: userResult = JSON.parse(JSON.stringify(user))
            const silk = await findSilkById(JID)
            if (silk) {
                const {silk_own}: SilkFromUser = JSON.parse(JSON.stringify(silk))
                const silkQuantity = silk_own + parseInt(req.query.silkQuantity!.toString())
                await updateSilk(JID, silkQuantity)
            } else {
                await createSilk(JID, parseInt(req.query.silkQuantity!.toString()))
            }
            console.log('payment success')
            res.send(user);
            res.status(200)
            res.end();
        }
    }catch (failure) {
        console.log(failure);
        res.status(500);
    }
});

router.get('/getQuantityUsersOnline', async (req, res) => {
    try {
        const usersOnline = await getUsersOnlineController();
        res.send({ usersOnline: usersOnline });
        res.status(200);
    } catch (failure) {
        console.log(failure);
        res.status(500);
    }
});

export = router
