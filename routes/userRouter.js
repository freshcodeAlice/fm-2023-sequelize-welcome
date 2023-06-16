const express = require('express');
const UserController = require('../controllers/User.controller');
const {pagination} = require('../middleware/pagination.mw');
const userRouter = express.Router();

userRouter.post('/', UserController.createOne);
userRouter.get('/:id', UserController.findOne);
userRouter.get('/', pagination, UserController.findAll);
userRouter.put('/:id', UserController.updateOne);
userRouter.delete('/:id', UserController.deleteOne);


module.exports = userRouter;