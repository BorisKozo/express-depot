var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express = require('express');

function errorHandler(req, res, next) {

    var err = new Error('Not Found');
    err.status = 404;
    next(err);

}

module.exports = [
    logger('dev'),
    bodyParser.json(),
    bodyParser.urlencoded({extended: false}),
    cookieParser(),
    express.static(path.join(__dirname, '..', '..', '..', 'public'))
//    errorHandler
];