const log = require('../config/log');
const log4js = require('log4js');

// log4js 日志类
log4js.configure(log.log);

module.exports = log4js;
