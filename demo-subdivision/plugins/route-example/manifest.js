const subdivision = require('subdivision');
const index = require('./index');


module.exports = {
    paths: [
        {
            path: 'express/routers',
            type: 'express router',
            addins: [
                {
                    route: '/plugins/route-example',
                    routerPath: 'route-example/routes/index'
                }
            ]
        },
        {
            path: 'route-example/routes/index',
            addins: [
                {
                    type: 'express route',
                    verb: 'get',
                    route: '/',
                    handler: index.view
                }
            ]
        }
    ]
};
