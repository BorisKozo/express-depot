const subdivision = require('subdivision');
const routes = require('./index');
var users = require('./users');

// catch 404 and forward to error handler
app.use();

module.exports = {
    paths: [
        {
            path: 'express',
            addins: [
                {
                    type: 'express route',
                    verb: 'use',
                    route: '/',
                    handler: routes
                },
                {
                    type: 'express route',
                    verb: 'use',
                    route: '/users',
                    handler: users
                },
                {
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
