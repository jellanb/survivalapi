"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const metrics_1 = require("../../metrics/");
const router = express_1.default.Router();
router.get('/metrics', async (req, res) => {
    const metrics = metrics_1.handlerMetrics.getMetrics();
    res.send({ metrics });
});
module.exports = router;
