import express from 'express';
import initDatabase from "./database";
import bodyParser from "body-parser";
import cors from 'cors';
import { makeRequest, makeSubscription, executePayment } from './payment';
import {
    findUserByName,
    findUserByEmail,
    createUser,
    findUserByUsernamePassword
} from './infrastructure/persistence/repositories/UsersRepository'
import { findSilkById, updateSilk, createSilk } from './infrastructure/persistence/repositories/SilkRepository'

interface SilkFromUser {
    silkOwn: number
}

interface userResult {
    StrUserID:string,
    JID:number
}

interface userNameResult {
    isValid: boolean
}

let userPasswordResponse = {
    userName: '',
    silk: 0,
    isSingIn: false,
    description: ''
}

let userNameResult = {
    isValid: false
}

const app = express();
app.use(bodyParser());
app.use(cors({origin: '*'}));

app.get('/survivalsro/api/Users/GetUserByName', async (req,res) => {

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

app.get('/survivalsro/api/Users/EmailByEmail', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const emailValid = await findUserByEmail(req.query.email!.toString());
    await res.send({ isValid: emailValid !== undefined ? false : true });
    await res.status(200);
});

app.get('/survivalsro/api/Users/UserByNamePassword', async (req,res) => {
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
        const { StrUserID, JID }:userResult  = JSON.parse(JSON.stringify(user))
        userPasswordResponse.userName = StrUserID
        userPasswordResponse.isSingIn = true
        userPasswordResponse.description = 'Sesion iniciada correctamente!'

        const silk = await findSilkById(JID)
        if (silk) {
            const { silkOwn }: SilkFromUser = JSON.parse(JSON.stringify(silk))
            userPasswordResponse.silk = silkOwn
        }
    }
    await res.send(userPasswordResponse);
    await res.status(200);
});

app.post('/survivalsro/api/Users/SaveUser', async (req,res) => {
    try {
        res.send(await createUser(req.query.username!.toString(), req.query.lastName!.toString(), req.query.email!.toString(), req.query.password!.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
});

app.get('/survivalsro/api/Payment/createPayment', async (req,res) => {
    try {
        await makeRequest(
            res,
            makeSubscription(
                parseInt(
                req.query.amount!.toString()),
                req.query.silkQuantity!.toString(),
                req.query.username!.toString()
            )
        )
    }
    catch (e) {
        console.log(e)
        res.status(500);
    }
});

app.get('/survivalsro/api/Payment/executePayment', async (req,res) => {
    try {
        const paymentSuccess = await executePayment(
            res, req.query.token!.toString(),
            req.query.silkQuantity!.toString()
        )
        if (paymentSuccess) {
            const user = await findUserByName(req.query.username!.toString())
            if (user){
                const { JID }: userResult  = JSON.parse(JSON.stringify(user))
                const silk = await findSilkById(JID)
                if (silk) {
                    const {silkOwn}: SilkFromUser = JSON.parse(JSON.stringify(silk))
                    const silkQuantity = silkOwn + parseInt(req.query.silkQuantity!.toString())
                    await updateSilk(JID, silkQuantity)
                } else {
                    await createSilk(JID, parseInt(req.query.silkQuantity!.toString()))
                }
                console.log('payment success')
                res.writeHead( 301, {Location : 'http://survivalsro.com'})
                res.end();
            } else {
                console.log('payment failed')
                res.status(500);
            }

        }
    }
    catch (e) {
        res.status(500);
    }
});


app.listen(3002);
console.log('app running on port 3002');
startDb();

async function startDb() {
    await initDatabase();
}




