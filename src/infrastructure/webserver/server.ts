import express from 'express';
import bodyParser from "body-parser";
import cors from 'cors';
import paymentRouter from '../../infrastructure/webserver/routes/paymentRouters';
import usersRouter from '../../infrastructure/webserver/routes/usersRouter'
import killRouter from '../../infrastructure/webserver/routes/killsRouter';
import fortressInfo from '../../infrastructure/webserver/routes/fortress'
import * as https from "https";
import * as fs from "fs";
import * as http from "http";
import SurvivalLogger from "../observability/logging/logger";

export default async function InitWebServer(){
    const ssl = {
        key: fs.readFileSync('key.pem'),
        cert: fs.readFileSync('cert.pem')
    };

    const app = express();
    app.use(bodyParser());
    app.use(cors({origin: '*'}));
    app.use('/fortress', fortressInfo)
    app.use('/payment', paymentRouter)
    app.use('/users', usersRouter)
    app.use('/job', killRouter)
    app.use('/unique', killRouter)

    const httpsServer = https.createServer({
        key: ssl.key,
        cert: ssl.cert
    }, app);

    const httpServer = http.createServer(app);

    await httpServer.listen(process.env['http_port'], () => {
        SurvivalLogger().info(`app running on port ${process.env['http_port']} to http server`)
    });

    await httpsServer.listen(process.env["https_port"], () => {
        SurvivalLogger().info(`app running on port ${process.env['https_port']} to https server`)
    });
}


