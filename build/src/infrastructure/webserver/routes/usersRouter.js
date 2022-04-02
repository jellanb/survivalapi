"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const express_1 = __importDefault(require("express"));
const add_new_user_controller_1 = require("../../../controllers/users/add-new-user-controller");
const joi_1 = __importDefault(require("joi"));
const add_silk_after_payment_controller_1 = require("../../../controllers/users/add-silk-after-payment-controller");
const get_load_information_controller_1 = require("../../../controllers/users/get-load-information-controller");
const logger_1 = __importDefault(require("../../observability/logging/logger"));
const login_controller_1 = __importDefault(require("../../../controllers/users/login-controller"));
const email_validations_controller_1 = __importDefault(require("../../../controllers/users/email-validations-controller"));
const account_validations_controller_1 = __importDefault(require("../../../controllers/users/account-validations-controller"));
const edit_user_account_controller_1 = __importDefault(require("../../../controllers/users/edit-user-account-controller"));
const router = express_1.default.Router();
router.get('/username-validation', async (req, res) => {
    await res.setHeader('Content-Type', 'application/json');
    try {
        const username = req.query.username.toString();
        const usernameValid = await (0, account_validations_controller_1.default)(username);
        await res.send(usernameValid);
        await res.status(200);
    }
    catch (error) {
        logger_1.default.error(`[ERROR] Cannot validate user username: ${req.query.username.toString()}, ${error}`);
        res.status(500);
    }
});
router.get('/email-validation', async (req, res) => {
    try {
        await res.setHeader('Content-Type', 'application/json');
        const email = req.query.email.toString();
        const emailValid = await (0, email_validations_controller_1.default)(email);
        await res.send(emailValid);
        await res.status(200);
    }
    catch (error) {
        logger_1.default.error(`[ERROR] Cannot validate user email: ${req.query.email.toString()}, ${error}`);
        res.status(500);
    }
});
router.get('/sing-in', async (req, res) => {
    await res.setHeader('Content-Type', 'application/json');
    const username = req.query.username.toString();
    const password = req.query.password.toString();
    try {
        const loginResult = await (0, login_controller_1.default)(username, password);
        res.send(loginResult);
        res.status(200);
    }
    catch (error) {
        logger_1.default.error(`[ERROR] Cannot process login to username:${username} and password:${password}, ${error}`);
        res.status(500);
    }
});
router.post('/add-new-user', async (req, res) => {
    const schema = joi_1.default.object({
        username: joi_1.default.string().required(),
        lastname: joi_1.default.string().required(),
        email: joi_1.default.string().required(),
        password: joi_1.default.string().required(),
        secretQuestion: joi_1.default.string().required(),
        secretAnswer: joi_1.default.string().required(),
    });
    try {
        const { username, lastname, email, password, secretQuestion, secretAnswer } = req.query;
        const data = {
            username: username.toString(),
            lastname: lastname.toString(),
            email: email.toString(),
            password: password.toString(),
            secretQuestion: secretQuestion.toString(),
            secretAnswer: secretAnswer.toString()
        };
        await schema.validateAsync(data);
        if (joi_1.default.isError(schema))
            throw new Error('ALL_PARAMS_REQUIRED');
        const userResult = await (0, add_new_user_controller_1.addNewUserController)(data);
        if (userResult.username === username) {
            res.send(userResult);
            res.status(200);
        }
        else {
            res.send(userResult);
            res.status(500);
        }
    }
    catch (error) {
        res.send(error);
        res.status(500);
    }
});
router.post('/edit-account', async (req, res) => {
    try {
        const username = req.query.username.toString();
        const password = req.query.password.toString();
        const email = req.query.email.toString();
        res.send(await (0, edit_user_account_controller_1.default)(username, password, email));
        res.status(200);
    }
    catch (error) {
        logger_1.default.error(`[ERROR] Cannot edit user account to user ${req.query.username.toString()}, ${error}`);
        res.status(500);
    }
});
router.get('/get-load-information', async (req, res) => {
    try {
        const loadInformation = await (0, get_load_information_controller_1.getLoadInformationController)();
        res.send(loadInformation);
        res.status(200);
        res.end();
    }
    catch (failure) {
        logger_1.default.error(`[ERROR]: failed to get load data information web site! ${failure}`);
        res.status(500);
    }
});
router.post('/add-silk-after-payment', async (req, res) => {
    try {
        const username = req.query.username.toString();
        const silkQuantity = req.query.silkQuantity.toString();
        await (0, add_silk_after_payment_controller_1.addSilkAfterPaymentController)(username, silkQuantity);
        res.status(200);
        res.end();
    }
    catch (failure) {
        logger_1.default.error(`[ERROR] cannot add silk to users ${req.query.username.toString()}!`);
        res.status(500);
    }
});
module.exports = router;
