"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const update_unique_kills_1 = __importDefault(require("../../../domain/usecase/update-unique-kills"));
const get_all_unique_kills_1 = __importDefault(require("../../../domain/usecase/get-all-unique-kills"));
const router = express_1.default.Router();
router.post('/UpdateKills', async (req, res) => {
    try {
        await (0, update_unique_kills_1.default)();
        res.status(200);
        res.end();
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.end();
    }
});
router.get('/ListUniqueKill', async (req, res) => {
    try {
        res.send(await (0, get_all_unique_kills_1.default)());
        res.status(200);
        res.end();
    }
    catch (error) {
        console.log(error);
        res.status(500);
        res.end();
    }
});
module.exports = router;
