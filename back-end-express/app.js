
var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

var apiRoute = require('./routes/api');


var app = express();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
app.disable('etag');

app.use('/:api/:server/:method', apiRoute)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.send({error:404, message:"url not found", url:req.originalUrl});
});

app.use(function(err, req, res, next) {
	res.locals.message = err.message;
	res.locals.error = req.app.get('env') === 'development' ? err : {};
	res.status(err.status || 500);
	res.json({error:500, message: err.message});
});

module.exports = app;


