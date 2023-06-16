const express = require('express');
const taskRouter = require('./taskRouter');
const userRouter = require('./userRouter');
const apiRouter = express.Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/tasks', taskRouter);

module.exports = apiRouter;
