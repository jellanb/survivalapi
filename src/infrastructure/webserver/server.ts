import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import paymentRouter from '../../infrastructure/webserver/routes/paymentRouters';
import usersRouter from '../../infrastructure/webserver/routes/usersRouter';
import metrics from '../../infrastructure/webserver/routes/metrics';
import * as https from 'https';
import * as fs from 'fs';
import * as http from 'http';
import SurvivalLogger from '../observability/logging/logger';
import config from '../../utils/config';

export default async function InitWebServer(){
    const httpPort = process.env['http_port'];
    const httpsPort= process.env['https_port'];
    const ssl = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    };

    const app = express();
    app.use(bodyParser());
    app.use(cors({origin: '*'}));
    app.use('/payment', paymentRouter);
    app.use('/users', usersRouter);
    app.use('/survival-api', metrics)

    const httpsServer = https.createServer({
        key: ssl.key,
        cert: ssl.cert
    }, app);

    const httpServer = http.createServer(app);

    await httpServer.listen(httpPort, () => {
        SurvivalLogger.info(`app running on port ${config.httpPort} to http server`)
    });

    await httpsServer.listen(httpsPort, () => {
        SurvivalLogger.info(`app running on port ${config.httpsPort} to https server`)
    });
}


