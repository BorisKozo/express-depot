const subdivision = require('subdivision');
const middleware = require('./middleware');
const index = require('./index');
const users = require('./users');


module.exports = {
    paths: [
        {
            path: 'express/middleware',
            addins: [
                {
                    type: 'express middleware array',
                    handlers: middleware
                },

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
