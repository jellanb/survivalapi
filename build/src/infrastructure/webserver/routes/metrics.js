"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.get('/metrics', async (req, res) => {
    //const metrics = handlerMetrics.getMetrics()
    //res.send({metrics})
});
module.exports = router;
