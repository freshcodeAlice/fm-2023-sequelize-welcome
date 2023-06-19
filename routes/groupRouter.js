const express = require('express');
const GroupController = require('../controllers/Group.controller');
const multer = require('multer');
const path = require('path');

const STATIC_PATH = path.resolve(__dirname, '../public/images');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, STATIC_PATH)
      },
    filename: function(req, file, cb) {
        cb(null, `${Date.now()}.${file.originalname}`)
    }
})

const upload = multer({storage}); 

const groupRouter = express.Router();


groupRouter.post('/', GroupController.createGroup);
groupRouter.put('/:groupId/:userId', GroupController.addUserToGroup);
groupRouter.get('/:groupId/count', GroupController.countUserInGroup);
groupRouter.get('/:groupId', GroupController.getGroupWithUsers);
groupRouter.delete('/:groupId/:userId', GroupController.removeUserFromGroup);

groupRouter.patch('/:groupId', upload.single('groupAvatar'), GroupController.createImage);

module.exports = groupRouter;


/// deleteUserFromGroup