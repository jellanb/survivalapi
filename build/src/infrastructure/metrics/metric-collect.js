"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.METRICS_TO_COLLECT = void 0;
const METRICS_LABELS = ['web_site', 'payment', 'document_type', 'error_code', 'source'];
exports.METRICS_TO_COLLECT = {
    userVisitWebSite: {
        name: 'userVisitWebSite',
        help: 'Get the total count users visits web site',
        labelNames: METRICS_LABELS,
    },
    userCreateAccount: {
        name: 'userCreateAccount',
        help: 'Get the total count users created accounts',
        labelNames: METRICS_LABELS,
    },
    userLogin: {
        name: 'userLogin',
        help: 'Get the total count of users logins in web site',
        labelNames: METRICS_LABELS,
    },
    intentionPay: {
        name: 'intentionPay',
        help: 'Get the total count payment intention',
        labelNames: METRICS_LABELS,
    },
    paymentSuccess: {
        name: 'paymentSuccess',
        help: 'Get the total count of payment success',
        labelNames: METRICS_LABELS,
    },
    paymentFailed: {
        name: 'paymentFailed',
        help: 'Get the total count of payment failed',
        labelNames: METRICS_LABELS,
    },
};
