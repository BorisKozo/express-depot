const subdivision = require('subdivision');
const path = require('path');
const index = require('./index');
const users = require('./users');


module.exports = {
    paths: [
        {
            path: subdivision.systemPaths.conditions,
            addins: [
                {
                    name: 'isDevelopmentCondition',
                    isValid(){
                        return process.env['NODE_ENV'] === 'development'
                    }
                }
            ]
        },
        {
            path: 'express/middleware/start',
            addins: [
                {
                    type: 'express static',
                    path: (path.join(__dirname, 'public'))
                }

            ]
        },
        {
            path: 'express/middleware/end',
            type: 'express middleware',
            addins: [
                {
                    order: '>>errorGenerator',
                    handler(err, req, res, next) {
                        res.status(err.status || 500);
                        res.render('main/views/error', {
                            message: err.message,
                            error: err
                        });

                    },
                    isEnabled: 'isDevelopmentCondition'
                },
                {
                    order: '>>errorGenerator',
                    handler(err, req, res, next) {
                        res.status(err.status || 500);
                        res.render('main/views/error', {
                            message: err.message,
                            error: {}
                        });
                    },
                    isEnabled: '!isDevelopmentCondition'
                }

            ]
        },
        {
            path: 'express/routers',
            type: 'express router',
            addins: [
                {
                    route: '/',
                    routerPath: 'main/routes/index'
                },
                {
                    route: '/users',
                    routerPath: 'main/routes/users'
                }
            ]
        },
        {
            path: 'main/routes/index',
            addins: [
                {
                    type: 'express route',
                    verb: 'get',
                    route: '/',
                    handler: index.main
                }
            ]
        },
        {
            path: 'main/routes/users',
            addins: [
                {
                    type: 'express route',
                    verb: 'get',
                    route: '/',
                    handler: users.user
                }
            ]
        }
    ]
};
