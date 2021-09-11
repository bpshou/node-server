const config = require('./config/app');
const log4js = require('./util/log4js');
const routes = require('./router/index');
const Koa = require('koa');
const app = new Koa();

const logger = log4js.getLogger('index');

function start() {
    const port = config.app.port;
    logger.debug("Service is start, port:", port);
    // 批量注册路由
    for (const [, router] of Object.entries(routes)) {
        app.use(router.routes()).use(router.allowedMethods());
    }
    app.listen(port);
}

start();
