import express from 'express';
import {
    findUserByEmail,
    findUserByName,
    findUserByUsernamePassword
} from "../../persistence/repositories/UsersRepository";
import {findSilkById} from "../../persistence/repositories/SilkRepository";
import {findById} from "../../persistence/repositories/Net2eRepository";
import createNewUser from "../../../domain/usecase/create-new-user";
import {editUserAccount} from "../../../domain/usecase/edit-user-account";

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

router.get('/GetUserByName', async (req,res) => {

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

router.post('/SaveUser', async (req,res) => {
    try {
        res.send(
            await createNewUser(
                req.query.username!.toString(),
                req.query.lastName!.toString(),
                req.query.email!.toString(),
                req.query.password!.toString(),
                req.query.secretQuestion!.toString(),
                req.query.secretAnswer!.toString()
            ));
        res.status(200);
    }
    catch (e) {
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

export = router
