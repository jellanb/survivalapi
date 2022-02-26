"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const get_guild_name_occupied_fortress_1 = require("../../../controllers/fortress/get-guild-name-occupied-fortress");
const router = express_1.default.Router();
router.get('/getGuildNamesOccupiedFortressWar', async (req, res) => {
    try {
        const guildsNames = await (0, get_guild_name_occupied_fortress_1.getGuildNameOccupiedFortressController)();
        res.send(guildsNames);
        res.status(200);
    }
    catch (failure) {
        console.log(failure);
        res.status(500);
    }
});
module.exports = router;
