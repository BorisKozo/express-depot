const subdivision = require('subdivision');
const middleware = require('./middleware');
const index = require('./index');
const users = require('./users');


module.exports = {
    paths: [
        {
            path: 'express/middleware/start',
            addins: [
                {
                    type: 'express middleware array',
                    handlers: middleware
                },

            ]
        },
        {
            path: 'express/middleware/end',
            type: 'express middleware',
            addins: [
                {
                    id: 'errorGenerator',
                    handler(req, res, next) {
                        var err = new Error('Not Found');
                        err.status = 404;
                        next(err);
                    }
                },
                {
                    order: '>>errorGenerator',
                    handler(err, req, res, next) {
                        res.status(err.status || 500);
                        res.render('express/views/error', {
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
                        res.render('express/views/error', {
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
                    routerPath: 'express/routes/index'
                },
                {
                    route: '/users',
                    routerPath: 'express/routes/users'
                }
            ]
        },
        {
            path: 'express/routes/index',
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
            path: 'express/routes/users',
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
