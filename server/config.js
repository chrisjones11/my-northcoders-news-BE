require('dotenv').config();

module.exports = {
    DB: {
        test: 'mongodb://localhost/northcoders-news-api-test',
        dev:   'mongodb://localhost/northcoders-news-api',
        production: process.env.MONGO_URI
    },
    PORT: {
        test: 3090,
        dev: process.env.PORT || 5000,
        production: process.env.PORT
    }
};