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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const payment_1 = require("./payment");
const UsersRepository_1 = require("./infrastructure/persistence/repositories/UsersRepository");
const SilkRepository_1 = require("./infrastructure/persistence/repositories/SilkRepository");
let userPasswordResponse = {
    userName: '',
    silk: 0,
    isSingIn: false,
    description: ''
};
let userNameResult = {
    isValid: false
};
const app = express_1.default();
app.use(body_parser_1.default());
app.use(cors_1.default({ origin: '*' }));
app.get('/survivalsro/api/Users/GetUserByName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const user = yield UsersRepository_1.findUserByName(req.query.username.toString());
    userNameResult.isValid = false;
    if (user) {
        userNameResult.isValid = true;
    }
    yield res.send(userNameResult);
    yield res.status(200);
}));
app.get('/survivalsro/api/Users/EmailByEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const emailValid = yield UsersRepository_1.findUserByEmail(req.query.email.toString());
    yield res.send({ isValid: emailValid !== undefined ? false : true });
    yield res.status(200);
}));
app.get('/survivalsro/api/Users/UserByNamePassword', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const user = yield UsersRepository_1.findUserByUsernamePassword(req.query.username.toString(), req.query.password.toString());
    if (!user) {
        userPasswordResponse.description = 'Usuario y contraseña incorrectos!';
        userPasswordResponse.isSingIn = false;
    }
    if (user) {
        const { StrUserID, JID } = JSON.parse(JSON.stringify(user));
        userPasswordResponse.userName = StrUserID;
        userPasswordResponse.isSingIn = true;
        userPasswordResponse.description = 'Sesion iniciada correctamente!';
        const silk = yield SilkRepository_1.findSilkById(JID);
        if (silk) {
            const { silkOwn } = JSON.parse(JSON.stringify(silk));
            userPasswordResponse.silk = silkOwn;
        }
    }
    yield res.send(userPasswordResponse);
    yield res.status(200);
}));
app.post('/survivalsro/api/Users/SaveUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield UsersRepository_1.createUser(req.query.firstName.toString(), req.query.lastName.toString(), req.query.email.toString(), req.query.password.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
}));
app.get('/survivalsro/api/Payment/createPayment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield payment_1.makeRequest(res, payment_1.makeSubscription(parseInt(req.query.amount.toString()), req.query.silkQuantity.toString(), req.query.username.toString()));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
}));
app.get('/survivalsro/api/Payment/executePayment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentSuccess = yield payment_1.executePayment(res, req.query.token.toString(), req.query.silkQuantity.toString());
        if (paymentSuccess) {
            const user = yield UsersRepository_1.findUserByName(req.query.username.toString());
            if (user) {
                const { JID } = JSON.parse(JSON.stringify(user));
                const silk = yield SilkRepository_1.findSilkById(JID);
                if (silk) {
                    const { silkOwn } = JSON.parse(JSON.stringify(silk));
                    const silkQuantity = silkOwn + parseInt(req.query.silkQuantity.toString());
                    yield SilkRepository_1.updateSilk(JID, silkQuantity);
                }
                else {
                    yield SilkRepository_1.createSilk(JID, parseInt(req.query.silkQuantity.toString()));
                }
                console.log('payment success');
                res.writeHead(301, { Location: 'http://survivalsro.com' });
                res.end();
            }
            else {
                console.log('payment failed');
                res.status(500);
            }
        }
    }
    catch (e) {
        res.status(500);
    }
}));
app.listen(3002);
console.log('app running on port 3002');
startDb();
function startDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default();
    });
}
