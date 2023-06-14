const express = require('express');
const bodyParser = express.json();
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(bodyParser);
app.use('/api', apiRouter);

module.exports = app;


