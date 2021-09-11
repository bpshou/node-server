async function prepareParams(ctx, next) {
    ctx.body = {
        code: 200,
        info: 'this is service',
    };
}

module.exports = {
    prepareParams,
};
