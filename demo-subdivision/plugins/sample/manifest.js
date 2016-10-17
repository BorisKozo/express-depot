const routes = require('./routes');

module.exports = {
    paths: [
        {
            path: 'express/routers',
            type: 'express router',
            addins: [
                {
                    route: '/plugins/sample',
                    routerPath: 'sample/routes'
                },
            ]
        },
        {
            path: 'sample/routes',
            type: 'express route',
            addins: [
                {
                    verb: 'get',
                    route: '/',
                    handler: routes.view
                },
                {
                    verb: 'get',
                    route: '/err',
                    handler: routes.err
                },
                {
                    verb: 'post',
                    route: '/validate',
                    handler: routes.validate
                }
            ]
        }
    ]
};
