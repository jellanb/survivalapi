import winston from 'winston'


export interface SurvivalLogger {
    error: (messages: [] | Object | null | string) => winston.Logger;
    warn: (messages: [] | Object | null | string) => winston.Logger;
    info: (messages: [] | Object | null | string) => winston.Logger;
    verbose: (messages: [] | Object | null | string) => winston.Logger;
    debug: (messages: [] | Object | null | string) => winston.Logger;
}

export function SurvivalLogger(): SurvivalLogger {
    const prefix: string = '[Survival-api]';
    const transports = [];
    transports.push(new winston.transports.Console());
    const logger = winston.createLogger({
        transports: transports,
        defaultMeta:{
            level: process.env.logLevel
        }
    })
    return {
        error: (messages) => logger.error(`${prefix} ${processMessage(messages)}`),
        warn: (messages) => logger.warn(`${prefix} ${processMessage(messages)}`),
        info: (messages) => logger.info(`${prefix} ${processMessage(messages)}`),
        verbose: (messages) => logger.verbose(`${prefix} ${processMessage(messages)}`),
        debug: (messages) => logger.debug(`${prefix} ${processMessage(messages)}`)
    }
}

function processMessage(msg: [] | Object | null | string) {
    const now = new Date();
    if (msg instanceof Array) {
        return msg.join(' ');
    }
    if (msg instanceof Object) {
        return JSON.stringify(msg);
    }
    if (msg === undefined || msg == null) {
        return '';
    }
    return formatDate(now)+msg;
}

function padTo2Digits(num: number) {
    return num.toString().padStart(2, '0');
  }

function formatDate(date: Date) {
    return (
        `[${[
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
      ].join('-') +
      ' ' +
      [
        padTo2Digits(date.getHours()),
        padTo2Digits(date.getMinutes()),
        padTo2Digits(date.getSeconds()),
      ].join(':')}]`
    );
  }

export default SurvivalLogger();
