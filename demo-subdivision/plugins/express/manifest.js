const subdivision = require('subdivision');
const expressService = require('./express_service.js');

module.exports = {
    paths: [
        {
            path: subdivision.systemPaths.services,
            addins: [
                {
                    name: 'express',
                    type: 'subdivision.service',
                    content: expressService
                }
            ]
        },
        {
            path: subdivision.systemPaths.builders,
            type: 'subdivision.builder',
            addins: [
                {
                    target: 'express route',
                    build: function (addin, options) {
                        options.app[addin.verb](addin.route, addin.handler);
                    }
                },
                {
                    target: 'express static',
                    build: function (addin) {
                        expressService.addStaticPath(addin.path);
                    }
                },
                {
                    target: 'express middleware',
                    build: function (addin, options) {
                        options.app.use(addin.handler);
                    }
                },
                {
                    target: 'express middleware array',
                    build: function (addin, options) {
                        addin.handlers.forEach((handler)=> {
                            options.app.use(handler);
                        });
                    }
                },
                {
                    target: 'express router',
                    build: function (addin, options) {
                        const router = subdivision.services['express'].buildRouter(addin.routerPath);
                        options.app.use(addin.route, router);
                    }
                }

            ]
        }

    ]
};