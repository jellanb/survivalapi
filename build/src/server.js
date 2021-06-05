"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const database_1 = __importStar(require("./database"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
//const reouter = express.Router;
const app = express_1.default();
app.use(body_parser_1.default());
app.use(cors_1.default({ origin: '*' }));
app.get('/UserByName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const userValid = yield findUserByName(req.query.username.toString());
    yield res.send({ isValid: userValid !== undefined ? false : true });
    yield res.status(200);
}));
app.get('/EmailByEmail', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    yield res.setHeader('Content-Type', 'application/json');
    const emailValid = yield findEmailByEmail(req.query.email.toString());
    yield res.send({ isValid: emailValid !== undefined ? false : true });
    yield res.status(200);
}));
app.post('/addUser', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.send(yield addUser(req.query.firstName.toString(), req.query.lastName.toString(), req.query.email.toString(), req.query.password.toString()));
        res.status(200);
    }
    catch (e) {
        res.status(500);
    }
}));
app.listen(3000);
console.log('app running on port 3000');
startDb();
function startDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default();
    });
}
const findUserByName = (username) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.findByName(username);
});
const findEmailByEmail = (email) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.findByEmail(email);
});
const addUser = (firstName, lastName, email, pass) => __awaiter(void 0, void 0, void 0, function* () {
    return yield database_1.createUser(firstName, lastName, email, pass);
});
