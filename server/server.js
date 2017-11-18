if (!process.env.NODE_ENV) process.env.NODE_ENV = 'dev';

var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var config = require('./config');
var db = config.DB[process.env.NODE_ENV] || process.env.DB;
var router = require('./routes/index');
mongoose.Promise = global.Promise;

mongoose.connect(db, {useMongoClient: true})
    .then(() => console.log('successfully connected to database'))
    .catch(err => console.log('connection failed', err));

app.use(bodyParser.json());
app.use(cors());
app.use('/', express.static('public'));

app.use('/api', router);

app.use((err, req, res, next) => {
    if(err.status === 404) return res.status(404).send({message: err.message});
    if(err.status === 400) return res.status(400).send({message: err.message});
    else return next(err);
});
app.use('/*', (req, res) => {
    res.status(404).send({message: 'Page not found'});
});

module.exports = app;