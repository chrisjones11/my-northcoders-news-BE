require('dotenv').config();

module.exports = {
    DB: {
        test: 'mongodb://localhost/northcoders-news-api-test',
        dev: 'mongodb://chrisj:1234@ds113586.mlab.com:13586/northcoders-news-api' || 'mongodb://localhost/northcoders-news-api'
    },
    PORT: {
        test: 3090,
        dev: process.env.PORT || 5000
    }
};