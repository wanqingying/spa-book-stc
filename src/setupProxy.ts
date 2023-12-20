import {createProxyMiddleware} from 'http-proxy-middleware'


module.exports = function(app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'http://localhost:8080',
            changeOrigin: true,
            onProxyReq:(proxyReq, req, res, options)=>{
                console.log('req',req.url)
            }
        })
    );
};