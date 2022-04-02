"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SurvivalLogger = void 0;
const winston_1 = __importDefault(require("winston"));
function SurvivalLogger() {
    const prefix = '[Survival-api]';
    const transports = [];
    transports.push(new winston_1.default.transports.Console());
    const logger = winston_1.default.createLogger({
        transports: transports,
        defaultMeta: {
            level: process.env.logLevel
        }
    });
    return {
        error: (messages) => logger.error(`${prefix} ${processMessage(messages)}`),
        warn: (messages) => logger.warn(`${prefix} ${processMessage(messages)}`),
        info: (messages) => logger.info(`${prefix} ${processMessage(messages)}`),
        verbose: (messages) => logger.verbose(`${prefix} ${processMessage(messages)}`),
        debug: (messages) => logger.debug(`${prefix} ${processMessage(messages)}`)
    };
}
exports.SurvivalLogger = SurvivalLogger;
function processMessage(msg) {
    if (msg instanceof Array) {
        return msg.join(' ');
    }
    if (msg instanceof Object) {
        return JSON.stringify(msg);
    }
    if (msg === undefined || msg == null) {
        return '';
    }
    return msg;
}
exports.default = SurvivalLogger();
