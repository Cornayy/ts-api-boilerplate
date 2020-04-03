import chalk from 'chalk';
import loglevelPluginPrefix from 'loglevel-plugin-prefix';
import { Logger } from 'loglevel';

const colors = {
    TRACE: chalk.magenta,
    DEBUG: chalk.cyan,
    INFO: chalk.blue,
    WARN: chalk.yellow,
    ERROR: chalk.red
};

export const loggerConfig = (log: Logger) => {
    loglevelPluginPrefix.reg(log);
    loglevelPluginPrefix.apply(log, {
        format(level, name, timestamp) {
            return `${chalk.gray(`[${timestamp}]`)} ${colors[level.toUpperCase()](level)}`;
        }
    });

    const logLevel = log.levels[process.env.LOG_LEVEL] || log.levels.WARN;
    log.setLevel(logLevel);
};
