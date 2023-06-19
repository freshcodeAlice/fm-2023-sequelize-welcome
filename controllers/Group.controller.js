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
        const {params: {groupId}} = req;
        const groupWithMembers = await Group.findAll({
            where: {
                id: groupId
            },
            include: [{
                model: User,
                attributes: {
                    exclude: ['password']
                }
            }]
        });
        res.status(200).send({data: groupWithMembers})
    } catch(error) {
        next(error)
    }
}



module.exports.removeUserFromGroup = async (req, res, next) => {
    try{
        const {params: {userId, groupId}}= req;
        const groupInstance = await Group.findByPk(groupId);
        const userInstance = await User.findByPk(userId);
        await groupInstance.removeUser(userInstance);
        res.status(200).send({meta: {
            userRemoved: userId
        }});
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

module.exports.createImage = async (req, res, next) => {
    try {
        const {file: {filename}, params: {groupId}} = req;
        const [rowCount, updatedGroup] = await Group.update({
            imagePath: filename
        }, {
            where: {
                id: groupId
            },
            returning: true
        });
        res.status(200).send({data: updatedGroup});

    } catch(error) {
        next(error)
    }
}


/*


{
  fieldname: 'groupAvatar',
  originalname: '1672431927_flomaster-club-p-lastochka-shablon-dlya-virezaniya-oboi-6.jpg',
  encoding: '7bit',
  mimetype: 'image/jpeg',
  destination: '/home/freshcodealice/Стільниця/ALICE/onl-js-3 (fm)/fm-2023-sequelize-welcome/public/images',
  filename: '1687162994095.1672431927_flomaster-club-p-lastochka-shablon-dlya-virezaniya-oboi-6.jpg',
  path: '/home/freshcodealice/Стільниця/ALICE/onl-js-3 (fm)/fm-2023-sequelize-welcome/public/images/1687162994095.1672431927_flomaster-club-p-lastochka-shablon-dlya-virezaniya-oboi-6.jpg',
  size: 57239
}

*/