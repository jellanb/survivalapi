"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const moduleConnections_1 = __importDefault(require("./infrastructure/persistence/connectionManager/moduleConnections"));
const server_1 = __importDefault(require("./infrastructure/webserver/server"));
const logger_1 = __importDefault(require("./infrastructure/observability/logging/logger"));
async function runApp() {
    await (0, moduleConnections_1.default)();
    await (0, server_1.default)();
}
;
runApp()
    .then(() => (0, logger_1.default)().info('App init successfully'))
    .catch((failure) => (0, logger_1.default)().error(failure.message));
