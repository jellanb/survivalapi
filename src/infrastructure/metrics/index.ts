import { MetricsClient } from './prometheus-client'
import {METRICS_TO_COLLECT} from './metric-collect';


export const handlerMetrics = MetricsClient({ appName: 'survival_api', metricsToCollect: Object.values(METRICS_TO_COLLECT)})


