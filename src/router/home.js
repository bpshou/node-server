const Router = require('koa-router');
const koaBody = require('koa-body');
const log4js = require('../util/log4js');
const {
    HomeService: {prepareParams}
} = require('../service/index');

const router = new Router();
const logger = log4js.getLogger('router/home');

router.use(koaBody());
// // use 是通用中间件
// router.use('/', async ctx => {
//     logger.debug("Time: ", new Date());
//     ctx.body = 'Hello World';
// });

router.get('/', async ctx => {
    ctx.body = 'Hello World!';
});

router.get('/home', async ctx => {
    ctx.body = {
        code: 200,
        info: 'this is home',
    };
});

router.get('/service', prepareParams);

module.exports = router;
