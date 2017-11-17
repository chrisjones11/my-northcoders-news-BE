if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
var router = require('./routes/index');
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true})
    .then(() => console.log('successfully connected to', db))
    .catch(err => console.log('connection failed', err));

app.use(bodyParser.json());

app.use(express.static('public'));

app.use('/api', router);

module.exports = app;