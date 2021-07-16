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
const payment_1 = require("../../../payment");
const UsersRepository_1 = require("../../persistence/repositories/UsersRepository");
const SilkRepository_1 = require("../../persistence/repositories/SilkRepository");
const router = express_1.default.Router();
router.get('/createPayment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield payment_1.makeRequest(res, payment_1.makeSubscription(parseInt(req.query.amount.toString()), req.query.silkQuantity.toString(), req.query.username.toString()));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
}));
router.get('/executePayment', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const paymentSuccess = yield payment_1.executePayment(res, req.query.token.toString(), req.query.silkQuantity.toString());
        if (paymentSuccess) {
            const user = yield UsersRepository_1.findUserByName(req.query.username.toString());
            if (user) {
                const { JID } = JSON.parse(JSON.stringify(user));
                const silk = yield SilkRepository_1.findSilkById(JID);
                if (silk) {
                    const { silk_own } = JSON.parse(JSON.stringify(silk));
                    const silkQuantity = silk_own + parseInt(req.query.silkQuantity.toString());
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
module.exports = router;
