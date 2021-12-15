"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const payment_1 = require("../../../payment");
const TB_UsersRepository_1 = require("../../persistence/repositories/shard/TB_UsersRepository");
const SilkRepository_1 = require("../../persistence/repositories/shard/SilkRepository");
const router = express_1.default.Router();
router.get('/createPayment', async (req, res) => {
    try {
        await (0, payment_1.makeRequest)(res, (0, payment_1.makeSubscription)(parseInt(req.query.amount.toString()), req.query.silkQuantity.toString(), req.query.username.toString()));
    }
    catch (e) {
        console.log(e);
        res.status(500);
    }
});
router.get('/executePayment', async (req, res) => {
    try {
        const paymentSuccess = await (0, payment_1.executePayment)(res, req.query.token.toString(), req.query.silkQuantity.toString());
        if (paymentSuccess) {
            const user = await (0, TB_UsersRepository_1.findUserByName)(req.query.username.toString());
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
});
module.exports = router;
