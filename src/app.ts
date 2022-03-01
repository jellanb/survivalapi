import initDatabase from './infrastructure/persistence/connectionManager/moduleConnections'
import InitWebServer from './infrastructure/webserver/server'
import SurvivalLogger from "./infrastructure/observability/logging/logger";

async function runApp() {
    await initDatabase();
    await InitWebServer();
};

runApp()
    .then(() => SurvivalLogger.info('App init successfully'))
    .catch((failure) => SurvivalLogger.error(failure.message))








