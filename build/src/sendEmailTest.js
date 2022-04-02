"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmail = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
//gmail services, markdownd
const transporter = nodemailer_1.default.createTransport({
    service: 'gmail',
    auth: {
        user: 'jellansystem@gmail.com',
        pass: '9684150jellan'
    }
});
const mailOptions = {
    from: 'jellansystem@gmail.com',
    to: 'jellan_15@hotmail.com',
    subject: 'Sending Email using node.js',
    text: 'That was easy test'
};
const sendEmail = () => {
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        }
        else {
            console.log(`Email sent : ${info.response}`);
        }
    });
};
exports.sendEmail = sendEmail;
