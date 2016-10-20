const subdivision = require('subdivision');
const middleware = require('./middleware');

module.exports = {
    paths: [
        {
            path: 'express/middleware/start',
            addins: [
                {
                    type: 'express middleware array',
                    handlers: middleware
                }
            ]
        },
        {
            path: 'express/middleware/end',
            addins: [
                {
                    id: 'errorGenerator',
                    type: 'express middleware',
                    handler(req, res, next) {
                        var err = new Error('Not Found');
                        err.status = 404;
                        next(err);
                    }
                }
            ]
        }
    ]
};
