const express = require('express');
const GroupController = require('../controllers/Group.controller');
// const {pagination} = require('../middleware/pagination.mw');

const groupRouter = express.Router();


groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:groupId/count', GroupController.countUserInGroup);


module.exports = groupRouter;