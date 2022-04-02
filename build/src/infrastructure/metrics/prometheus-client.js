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
exports.MetricsClient = exports.withModulePrefix = void 0;
const node_emoji_1 = __importDefault(require("node-emoji"));
const PrometheusClient = __importStar(require("prom-client"));
const logger_1 = __importDefault(require("../observability/logging/logger"));
const funtions_1 = require("../../utils/funtions");
exports.withModulePrefix = (0, funtions_1.withPrefix)('[metrics-client]');
function MetricsClient(configParams) {
    const { appName, metricsToCollect } = configParams;
    const getSingleMetric = (metricName) => PrometheusClient.register.getSingleMetric(`${appName}_${metricName}`);
    const setCounterMetrics = (metrics) => {
        metrics.forEach((metric) => {
            new PrometheusClient.Counter({
                name: `${appName}_${metric.name}`,
                help: metric.help,
                labelNames: metric.labelNames,
            });
        });
    };
    const start = () => {
        PrometheusClient.register.setDefaultLabels({ name: appName });
        PrometheusClient.collectDefaultMetrics({ prefix: `${appName}_` });
        setCounterMetrics(metricsToCollect);
        logger_1.default.info((0, exports.withModulePrefix)(`Started collecting metrics ${node_emoji_1.default.get('rainbow')}`));
    };
    return {
        start,
        getMetrics: () => PrometheusClient.register.metrics(),
        incrementMetric: ({ metricName, labelValues, incrementValue }) => {
            try {
                const metricToIncrement = getSingleMetric(metricName);
                metricToIncrement.inc(Object.assign({}, labelValues), incrementValue);
                logger_1.default.debug((0, exports.withModulePrefix)(`Incremented ${metricName} metric with a value of ${incrementValue} and with labels ${JSON.stringify(labelValues)}`));
            }
            catch (error) {
                logger_1.default.error((0, exports.withModulePrefix)(`Error on incrementing ${metricName} metric => ${error}`));
            }
        },
        shutDownMetricsClient: () => {
            PrometheusClient.register.clear();
            logger_1.default.info((0, exports.withModulePrefix)('closed metrics gathering'));
        },
    };
}
exports.MetricsClient = MetricsClient;
