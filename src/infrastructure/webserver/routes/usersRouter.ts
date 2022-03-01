import express from 'express';
import {addNewUserController} from "../../../controllers/users/add-new-user-controller";
import Joi from "joi";
import {addSilkAfterPaymentController} from "../../../controllers/users/add-silk-after-payment-controller";
import {getLoadInformationController} from "../../../controllers/users/get-load-information-controller";
import SurvivalLogger from "../../observability/logging/logger";
import loginUserController from "../../../controllers/users/login-controller";
import emailValidationsController from "../../../controllers/users/email-validations-controller";
import AccountValidationsController from "../../../controllers/users/account-validations-controller";
import EditUserAccountController from "../../../controllers/users/edit-user-account-controller";

const router = express.Router();

router.get('/username-validation', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    try {
        const username = req.query.username!.toString();
        const usernameValid = await AccountValidationsController(username);
        await res.send(usernameValid);
        await res.status(200);
    } catch (error) {
        SurvivalLogger.error(`[ERROR] Cannot validate user username: ${req.query.username!.toString()}, ${error.message}`);
        res.status(500);
    }
});

router.get('/email-validation', async (req,res) => {
    try {
        await res.setHeader(
            'Content-Type',
            'application/json'
        );
        const email = req.query.email!.toString();
        const emailValid = await emailValidationsController(email);
        await res.send(emailValid);
        await res.status(200);
    } catch (error) {
        SurvivalLogger.error(`[ERROR] Cannot validate user email: ${req.query.email!.toString()}, ${error.message}`);
        res.status(500);
    }
});

router.get('/sing-in', async (req,res) => {
    await res.setHeader(
        'Content-Type',
        'application/json'
    );
    const username = req.query.username!.toString();
    const password = req.query.password!.toString();
    try {
        const loginResult = await loginUserController(username, password);
        res.send(loginResult);
        res.status(200);
    } catch (error) {
        SurvivalLogger.error(`[ERROR] Cannot process login to username:${username} and password:${password}, ${error.message}`);
        res.status(500);
    }
});

router.post('/add-new-user', async (req,res) => {

    const schema = Joi.object({
        username: Joi.string().required(),
        lastname: Joi.string().required(),
        email: Joi.string().required(),
        password: Joi.string().required(),
        secretQuestion: Joi.string().required(),
        secretAnswer: Joi.string().required(),
    });

    try {
        const { username, lastname, email, password, secretQuestion, secretAnswer } = req.query;
        const data = {
            username: username!.toString(),
            lastname: lastname!.toString(),
            email: email!.toString(),
            password: password!.toString(),
            secretQuestion: secretQuestion!.toString(),
            secretAnswer: secretAnswer!.toString()
        }
        await schema.validateAsync(data);

        if (Joi.isError(schema)) throw new Error('ALL_PARAMS_REQUIRED');

        const userResult = await addNewUserController(data);

        if (userResult.username === username){
            res.send(userResult);
            res.status(200);
        } else {
            res.send(userResult);
            res.status(500);
        }
    }
    catch (error) {
        res.send(error);
        res.status(500);
    }
});

router.post('/edit-account', async (req,res) => {
    try {
        const username = req.query.username!.toString();
        const password = req.query.password!.toString();
        const email = req.query.email!.toString();
        res.send(await EditUserAccountController(username, password, email));
        res.status(200);
    }
    catch (error) {
        SurvivalLogger.error(`[ERROR] Cannot edit user account to user ${req.query.username!.toString()}, ${error.message}`);
        res.status(500);
    }
});

router.get('/get-load-information', async (req, res) => {
    try {
        const loadInformation = await getLoadInformationController();
        res.send(loadInformation);
        res.status(200);
        res.end();
    } catch (failure) {
        SurvivalLogger.error(`[ERROR]: failed to get load data information web site! ${failure.message}`)
        res.status(500);
    }
});

router.post('/add-silk-after-payment', async (req,res) => {
    try {
        const username = req.query.username!.toString();
        const silkQuantity = req.query.silkQuantity!.toString();
        await addSilkAfterPaymentController(username, silkQuantity);
        res.status(200);
        res.end();
    } catch (failure) {
        SurvivalLogger.error(`[ERROR] cannot add silk to users ${req.query.username!.toString()}!`);
        res.status(500);
    }
});

export = router
