const {User} = require('../models');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send(createdUser);
    } catch(error) {
        next(error)
    }
}


module.exports.findOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundedUser = await User.findByPk(id);
        res.status(200).send(foundedUser);
    } catch(error) {
        next(error)
    }
}