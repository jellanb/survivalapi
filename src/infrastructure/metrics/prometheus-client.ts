import emoji from 'node-emoji'
import * as PrometheusClient from 'prom-client'
import { Counter } from 'prom-client'
import { MetricItem, UsedLabels } from './metric-collect';
import logger from '../observability/logging/logger';
import { withPrefix } from '../../utils/funtions';

export const withModulePrefix = withPrefix('[metrics-client]')

interface MetricsClientConfig {
    appName: string
    metricsToCollect: MetricItem[]
}

export interface MetricsClient {
    start: () => void
    getMetrics: () => string
    incrementMetric: (params: {
        metricName: string
        labelValues: { [key in UsedLabels]: string | number }
        incrementValue: number,
    }) => void
    shutDownMetricsClient: () => void
}

export function MetricsClient(configParams: MetricsClientConfig): MetricsClient {
    const { appName, metricsToCollect } = configParams

    const getSingleMetric = (metricName: string) => PrometheusClient.register.getSingleMetric(`${appName}_${metricName}`)

    const setCounterMetrics = (metrics: MetricItem[]) => {
        metrics.forEach((metric) => {
            new PrometheusClient.Counter({
                name: `${appName}_${metric.name}`,
                help: metric.help,
                labelNames: metric.labelNames,
            })
        })
    }

    const start = () => {
        PrometheusClient.register.setDefaultLabels({ name: appName })
        PrometheusClient.collectDefaultMetrics({ prefix: `${appName}_` })
        setCounterMetrics(metricsToCollect)
        logger.info(withModulePrefix(`Started collecting metrics ${emoji.get('rainbow')}`))
    }

    return {
        start,
        getMetrics: () => PrometheusClient.register.metrics(),
        incrementMetric: ({ metricName, labelValues, incrementValue }) => {
            try {
                const metricToIncrement = getSingleMetric(metricName) as Counter<string>
                metricToIncrement.inc({ ...labelValues }, incrementValue)
                logger.debug(
                    withModulePrefix(
                        `Incremented ${metricName} metric with a value of ${incrementValue} and with labels ${JSON.stringify(
                            labelValues,
                        )}`,
                    ),
                )
            } catch (error) {
                logger.error(withModulePrefix(`Error on incrementing ${metricName} metric => ${error}`))
            }
        },
        shutDownMetricsClient: () => {
            PrometheusClient.register.clear()
            logger.info(withModulePrefix('closed metrics gathering'))
        },
    }
}
