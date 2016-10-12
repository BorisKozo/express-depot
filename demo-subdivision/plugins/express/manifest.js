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
                    build: function (addin) {
                        subdivision.services['express'].addRoute(addin.verb, addin.route, addin.handler);
                    }
                },
                {
                    target: 'express middleware',
                    build: function (addin) {
                        subdivision.services['express'].addMiddleware(addin.handler);
                    }
                },
                {
                    target: 'express middleware array',
                    build: function (addin) {
                        const expressService = subdivision.services['express'];
                        addin.handlers.forEach((handler)=> {
                            expressService.addMiddleware(handler);
                        });
                    }
                }

            ]
        }
    ]
};