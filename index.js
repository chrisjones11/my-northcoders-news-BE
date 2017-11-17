const app = require('./server/server');
// const PORT = require('./server/config').PORT[process.env.NODE_ENV];

app.listen(process.env.PORT || 5000 , function () {
    console.log(`listening on port ${process.env.PORT || 5000 }`);
});