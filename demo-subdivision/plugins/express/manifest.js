const subdivision = require('subdivision');
const expressService = require('./express_service.js');

module.exports = {
    paths: [
        {
            path: subdivision.systemPaths.services,
            addins: [
                {
                    name:'express',
                    type: 'subdivision.service',
                    content: expressService
                }
            ]
        }
    ]
};