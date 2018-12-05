const apiMock = require("./mock");
const proxy=require("http-proxy-middleware");

module.exports = {
    devServer: {
        before(app) {
            if (process.env.ISMOCK) { // 开发前期，还没有接口时
                apiMock(app);
            } else {
                app.use(proxy("/api",{ // 已有接口时
                    target: 'http://localhost:8090',
                    changeOrigin: true,
                }));
            }
        },
    }
};