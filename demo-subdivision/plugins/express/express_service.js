var path = require('path');
var debug = require('debug')('express-plugin-demo:server');
var http = require('http');
var express = require('express');
var subdivision = require('subdivision');

var app = express();
app.set('views', path.join(__dirname, '..'));
app.set('view engine', 'jade');

module.exports = {
    initialize(){
        return new Promise((resolve) => {
            function onListening() {
                var addr = server.address();
                var bind = typeof addr === 'string'
                    ? 'pipe ' + addr
                    : 'port ' + addr.port;
                debug('Building routes');
                subdivision.build('express/middleware/start', {app});
                subdivision.build('express/routes', {app});
                subdivision.build('express/routers', {app});
                subdivision.build('express/middleware/end', {app});
                debug('Listening on ' + bind);

                resolve();
            }

            function onError(error) {
                if (error.syscall !== 'listen') {
                    throw error;
                }

                var bind = typeof port === 'string'
                    ? 'Pipe ' + port
                    : 'Port ' + port;

                // handle specific listen errors with friendly messages
                switch (error.code) {
                    case 'EACCES':
                        console.error(bind + ' requires elevated privileges');
                        process.exit(1);
                        break;
                    case 'EADDRINUSE':
                        console.error(bind + ' is already in use');
                        process.exit(1);
                        break;
                    default:
                        throw error;
                }
            }

            function normalizePort(val) {
                var port = parseInt(val, 10);

                if (isNaN(port)) {
                    // named pipe
                    return val;
                }

                if (port >= 0) {
                    // port number
                    return port;
                }

                return false;
            }

            var port = normalizePort(process.env.PORT || '5000');
            app.set('port', port);
            var server = http.createServer(app);
            server.listen(port);
            server.on('error', onError);
            server.on('listening', onListening);
        });
    },

    buildRouter(routerPath){
        const router = express.Router();
        subdivision.build(routerPath, {
            app: router
        });
        return router;
    },

    addStaticPath(path){
        app.use(express.static(path));
    }
};
