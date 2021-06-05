import express from 'express';
import initDatabase, { findByName ,findByEmail ,createUser } from "./database";
import bodyParser from "body-parser";
import md5 from 'js-md5';
import cors from 'cors';

//const reouter = express.Router;
const app = express();
app.use(bodyParser());
app.use(cors({origin: '*'}));

app.get('/UserByName', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
        );
    const userValid = await findUserByName(req.query.username!.toString());
    await res.send({ isValid: userValid !== undefined ? false : true });
    await res.status(200);
});

app.get('/EmailByEmail', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const emailValid = await findEmailByEmail(req.query.email!.toString());
    await res.send({ isValid: emailValid !== undefined ? false : true });
    await res.status(200);
});

app.post('/addUser', async (req,res) => {
    try {
        res.send(await addUser(req.query.firstName!.toString(), req.query.lastName!.toString(), req.query.email!.toString(), req.query.password!.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
});

app.listen(3000);
console.log('app running on port 3000');
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






