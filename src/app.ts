import initDatabase from './infrastructure/persistence/connectionManager/moduleConnections'
import InitWebServer from './infrastructure/webserver/server'
import SurvivalLogger from "./infrastructure/observability/logging/logger";
import { handlerMetrics } from './infrastructure/metrics/index'

async function runApp() {
    await initDatabase();
    await InitWebServer();
    await handlerMetrics.start();
};

runApp()
    .then(() => SurvivalLogger.info('App init successfully'))
    .catch((failure) => SurvivalLogger.error(failure.message))








