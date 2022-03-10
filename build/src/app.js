"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moduleConnections_1 = __importDefault(require("./infrastructure/persistence/connectionManager/moduleConnections"));
const server_1 = __importDefault(require("./infrastructure/webserver/server"));
const logger_1 = __importDefault(require("./infrastructure/observability/logging/logger"));
const index_1 = require("./infrastructure/metrics/index");
async function runApp() {
    await (0, moduleConnections_1.default)();
    await (0, server_1.default)();
    await index_1.handlerMetrics.start();
}
;
runApp()
    .then(() => logger_1.default.info('App init successfully'))
    .catch((failure) => logger_1.default.error(failure.message));
