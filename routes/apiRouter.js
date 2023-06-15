const express = require('express');
const UserController = require('../controllers/User.controller');

const apiRouter = express.Router();

apiRouter.post('/users/', UserController.createOne);
apiRouter.get('/users/:id', UserController.findOne);
apiRouter.get('/users/', UserController.findAll);
apiRouter.put('/users/:id', UserController.updateOne);
apiRouter.delete('/users/:id', UserController.deleteOne);


module.exports = apiRouter;
