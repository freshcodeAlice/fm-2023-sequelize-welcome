const express = require('express');
const taskRouter = require('./taskRouter');
const userRouter = require('./userRouter');
const groupRouter = require('./groupRouter');
const apiRouter = express.Router();

apiRouter.use('/users', userRouter);
apiRouter.use('/tasks', taskRouter);
apiRouter.use('/groups', groupRouter);

module.exports = apiRouter;
