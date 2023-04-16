var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Router imports
var indexRouter = require('./routes/index');
var cityRouter = require('./routes/city');
var countriesRouter = require('./routes/countries');

var database = require('./database/database')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//Routes
app.use('/', indexRouter);
app.use('/city', cityRouter);
app.use('/countries', countriesRouter);

module.exports = app;
