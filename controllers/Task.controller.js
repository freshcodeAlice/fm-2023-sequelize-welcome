const {Task, User} = require('../models');

// module.exports.createOne = async (req, res, next) => {
//     try {
//         const {body: {body, isDone, userId}} = req;
//         const createdTask = await Task.create({body, isDone, userId});
//         res.status(201).send({data: createdTask});
//     } catch(error) {
//         next(error)
//     }
// }

module.exports.createOne = async (req, res, next) => {
        try {
            const {body: {body, isDone, userId}} = req;
           const userInstance = await User.findByPk(userId);

            const createdTask = await userInstance.createTask({body, isDone}); 
            res.status(201).send({data: createdTask});
        } catch(error) {
            next(error)
        }
    }

module.exports.getAllUserTasks = async(req, res, next) => {

    try {
        const {params: {id: userId}} = req;
        const userInstance = await User.findByPk(userId);
        const userTasks = await userInstance.getTasks();
        res.status(200).send({data: userTasks});
    } catch(error) {
        next(error)
    }
    }



module.exports.deleteTask = async (req, res, next) => {
    try {
        const {params: {userId, taskId}} = req;
      //  const userInstance = await User.findByPk(userId); -- user може знадобитись для перевірки прав на видалення 
        const task = await Task.findByPk(taskId);
        if (!task) {
           return res.status(404).send('Task not found')
        }
      const result = await task.destroy();
       res.status(204).send();
    } catch(error) {
        next(error)
    }
}