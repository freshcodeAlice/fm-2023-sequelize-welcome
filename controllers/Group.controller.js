const {Group, User} = require('../models');

module.exports.createGroup = async (req, res, next) => {
    try{
        const {body} = req;
        const createdGroup = await Group.create(body);
        res.status(201).send({data: createdGroup});
    } catch(error) {
        next(error)
    }
}

module.exports.addUserToGroup = async (req, res, next) => {
    try{
        const {params: {userId, groupId}}= req;
        const groupInstance = await Group.findByPk(groupId);
        const userInstance = await User.findByPk(userId);
        await groupInstance.addUser(userInstance);
        res.status(200).send({meta: {
            groupAdded: groupId
        }});
    } catch(error) {
        next(error)
    }
}

module.exports.countUserInGroup = async (req, res, next) => {
    try{
        const {params: {groupId}}= req;
        const groupInstance = await Group.findByPk(groupId);
        const count = await groupInstance.countUsers();
        res.status(200).send({
            data: {
                users: count
            }
        })
    } catch(error) {
        next(error)
    }
}



module.exports.getGroupWithUsers = async (req, res, next) => {
    try{

    } catch(error) {
        next(error)
    }
}

module.exports.removeUserFromGroup = async (req, res, next) => {
    try{

    } catch(error) {
        next(error)
    }
}

module.exports.updateGroup = async (req, res, next) => {
    try{

    } catch(error) {
        next(error)
    }
}

module.exports.deleteGroup = async (req, res, next) => {
    try{

    } catch(error) {
        next(error)
    }
}