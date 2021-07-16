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
const paymentRouters_1 = __importDefault(require("./infrastructure/webserver/routes/paymentRouters"));
const usersRouter_1 = __importDefault(require("./infrastructure/webserver/routes/usersRouter"));
const killsRouter_1 = __importDefault(require("./infrastructure/webserver/routes/killsRouter"));
const app = express_1.default();
app.use(body_parser_1.default());
app.use(cors_1.default({ origin: '*' }));
app.use('/payment', paymentRouters_1.default);
app.use('/users', usersRouter_1.default);
app.use('/job', killsRouter_1.default);
app.listen(3002);
console.log('app running on port 3002');
startDb();
function startDb() {
    return __awaiter(this, void 0, void 0, function* () {
        yield database_1.default();
    });
}
