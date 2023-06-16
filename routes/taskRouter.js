const express = require('express');
const TaskController = require('../controllers/Task.controller');
const {pagination} = require('../middleware/pagination.mw');

const taskRouter = express.Router();


taskRouter.post('/', TaskController.createOne);
taskRouter.get('/:id', TaskController.getAllUserTasks);
taskRouter.get('/:id/count', TaskController.getUserTaskCount);
taskRouter.delete('/:userId/:taskId', TaskController.deleteTask);

module.exports = taskRouter;