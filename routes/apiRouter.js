const express = require('express');
const UserController = require('../controllers/User.controller');
const TaskController = require('../controllers/Task.controller');
const {pagination} = require('../middleware/pagination.mw');
const apiRouter = express.Router();

apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.findOne);
apiRouter.get('/users/', pagination, UserController.findAll);
apiRouter.put('/users/:id', UserController.updateOne);
apiRouter.delete('/users/:id', UserController.deleteOne);

apiRouter.post('/tasks/', TaskController.createOne);
apiRouter.get('/tasks/:id', TaskController.getAllUserTasks);
apiRouter.get('/tasks/:id/count', TaskController.getUserTaskCount);
apiRouter.delete('/tasks/:userId/:taskId', TaskController.deleteTask);
module.exports = apiRouter;
