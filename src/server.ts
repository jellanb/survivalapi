import express from 'express';
import initDatabase, { findByName ,findByEmail ,createUser } from "./database";
import bodyParser from "body-parser";
import cors from 'cors';
import { makeRequest, makeSubscription, executePayment } from './payment';


const app = express();
app.use(bodyParser());
app.use(cors({origin: '*'}));

app.get('/survivalsro/api/Users/GetUserByName', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
        );
    const userValid = await findUserByName(req.query.username!.toString());
    await res.send({ isValid: userValid !== undefined ? false : true });
    await res.status(200);
});

app.get('/survivalsro/api/Users/EmailByEmail', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const emailValid = await findEmailByEmail(req.query.email!.toString());
    await res.send({ isValid: emailValid !== undefined ? false : true });
    await res.status(200);
});

app.post('/survivalsro/api/Users/SaveUser', async (req,res) => {
    try {
        res.send(await addUser(req.query.firstName!.toString(), req.query.lastName!.toString(), req.query.email!.toString(), req.query.password!.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
});

app.post('/survivalsro/api/Payment/createPayment', async (req,res) => {
    try {
        await makeRequest(res, makeSubscription(parseInt(req.query.amount!.toString())))
    }
    catch (e) {
        res.status(500);
    }
});

app.get('/survivalsro/api/Payment/executePayment', async (req,res) => {
    try {
        await executePayment(res, req.query.token!.toString())
    }
    catch (e) {
        res.status(500);
    }
});

app.get('/survivalsro/api/Payment/paymentSuccess', async (req,res) => {
    console.log('payment success')
    res.writeHead( 301, {Location : 'http://survivalsro.com'})
    res.end();
});

app.listen(3002);
console.log('app running on port 3002');
startDb();

async function startDb() {
    await initDatabase();
}

const findUserByName = async (username: string) => {
    return await findByName(username);
}

const findEmailByEmail = async (email: string) => {
    return await findByEmail(email);
}

const addUser = async (firstName: string, lastName: string, email: string, pass: string) => {
    return await createUser(firstName, lastName, email, pass);
}






