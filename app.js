// app.js
var express = require('express');
var app = express();
var db = require('./db');

var CarController = require('./car/CarController');
app.use('/cars', CarController);

module.exports = app;
