var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');


module.exports = [
    logger('dev'),
    bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    cookieParser(),
    express.static(path.join(__dirname, '..', '..', '..', 'public'))
];