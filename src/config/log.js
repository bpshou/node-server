module.exports = {
    log: {
        pm2: true,
        appenders: {
            debug: {
                type: 'console'
            },
            info: {
                type: 'dateFile',
                filename: 'logs/info',
                pattern: '-yy-MM-dd.log',
                alwaysIncludePattern: true,
                layout: {
                    type: 'pattern',
                    pattern: '[%x{logid}] [%d] [%p] [%f:%l] %c %m',
                    tokens: {
                        logid: function () {
                            return global.logid || '-';
                        }
                    }
                }
            },
            errorLog: {
                type: 'dateFile',
                filename: 'logs/error',
                pattern: '.log',
                alwaysIncludePattern: true,
                layout: {
                    type: 'pattern',
                    pattern: '[%x{logid}] [%d] [%p] [%f:%l] %c %m',
                    tokens: {
                        logid: function () {
                            return global.logid || '-';
                        }
                    }
                }
            },
            error: {
                type: 'logLevelFilter',
                level: 'error',
                appender: 'errorLog'
            }
        },
        categories: {
            default: {
                appenders: ['debug', 'info', 'error'],
                level: 'debug',
                enableCallStack: true
            },
            info: {
                appenders: ['info', 'error'],
                level: 'info',
                enableCallStack: true
            }
        }
    }
};
