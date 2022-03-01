import dotenv from "dotenv";
dotenv.config();

//TODO: define app behavior when a environment variable is not define

const serverDatabase = process.env['databaseHost'];
const accountDatabase = process.env['databaseAccount'];
const devDatabase = process.env['databaseDev'];
const shardDatabase = process.env['databaseShard'];
const vplusDatabase = process.env['databaseVPlus'];
const userDatabase = process.env['databaseUser'];
const passDatabase = process.env['databasePassword'];

const httpPort = process.env['http_port'];
const httpsPort = process.env['https_port'];
const httpServerUrl = process.env['server_ip'];

const apiKeyStripe = process.env['apiKeyStripe'];
const paypalClientId = process.env['paypalClientId'];
const paypalSecret = process.env['paypalSecret'];
const paypalUrl = process.env['paypalUrl'];
const mercadoPagoAccessToken = process.env['ACCESS_TOKEN_MP'];
const logLevel = process.env['logLevel'];

export = {
    serverDatabase,
    accountDatabase,
    devDatabase,
    shardDatabase,
    vplusDatabase,
    userDatabase,
    passDatabase,
    httpPort,
    httpsPort,
    httpServerUrl,
    apiKeyStripe,
    paypalClientId,
    paypalSecret,
    paypalUrl,
    mercadoPagoAccessToken,
    logLevel
}


