"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const moduleConnections_1 = __importDefault(require("./infrastructure/persistence/connectionManager/moduleConnections"));
const paymentRouters_1 = __importDefault(require("./infrastructure/webserver/routes/paymentRouters"));
const usersRouter_1 = __importDefault(require("./infrastructure/webserver/routes/usersRouter"));
const killsRouter_1 = __importDefault(require("./infrastructure/webserver/routes/killsRouter"));
const https = __importStar(require("https"));
const fs = __importStar(require("fs"));
const http = __importStar(require("http"));
const ssl = {
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
};
const app = (0, express_1.default)();
app.use((0, body_parser_1.default)());
app.use((0, cors_1.default)({ origin: '*' }));
app.use('/payment', paymentRouters_1.default);
app.use('/users', usersRouter_1.default);
app.use('/job', killsRouter_1.default);
app.use('/unique', killsRouter_1.default);
const httpsServer = https.createServer({
    key: ssl.key,
    cert: ssl.cert
}, app);
const httpServer = http.createServer(app);
httpServer.listen(process.env['http_port'], () => {
    console.log(`app running on port ${process.env['http_port']} to http server`);
});
httpsServer.listen(process.env["https_port"], () => {
    console.log(`app running on port ${process.env['https_port']} to https server`);
});
(0, moduleConnections_1.default)();
