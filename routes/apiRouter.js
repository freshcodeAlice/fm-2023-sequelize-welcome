const express = require('express');
const UserController = require('../controllers/User.controller');

const apiRouter = express.Router();

apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.findOne);
apiRouter.get('/users/', UserController.findAll);

module.exports = apiRouter;

/*
GET /:id - роут і метод контроллера для отримання одного юзера

*/