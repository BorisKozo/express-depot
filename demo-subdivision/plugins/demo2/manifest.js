const index = require('./index');
const path = require('path');

module.exports = {
    paths: [
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
            path: 'express/routers',
            type: 'express router',
            addins: [
                {
                    route: '/plugins/demo2',
                    routerPath: 'demo2/routes'
                },
            ]
        },
        {
            path: 'demo2/routes',
            type: 'express route',
            addins: [
                {
                    verb: 'get',
                    route: '/',
                    handler: index.view
                }
            ]
        }
    ]
};
