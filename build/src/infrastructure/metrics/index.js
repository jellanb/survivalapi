"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerMetrics = void 0;
const prometheus_client_1 = require("./prometheus-client");
const metric_collect_1 = require("./metric-collect");
exports.handlerMetrics = (0, prometheus_client_1.MetricsClient)({ appName: 'survival_api', metricsToCollect: Object.values(metric_collect_1.METRICS_TO_COLLECT) });
