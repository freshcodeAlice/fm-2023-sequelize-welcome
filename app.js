const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);


app.use(function (err, req, res, next) {
    res.status(500).send({errors: err})
});

module.exports = app;


