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

/*
Додати update таски та видалення

*/

module.exports.deleteTask = async (req, res, next) => {
    try {
        const {params: {userId, taskId}} = req;
        const userInstance = await User.findByPk(userId);
        const task = await Task.findByPk(taskId);
       const result =  await userInstance.removeTask(task); /// Error! Порушуються констрейнти
       /* Причина в тому, що метод removeTask не видаляє таску, а оновлює (update), встановлючи зв'язок з батьківською моделлю в NULL
       Якщо в стовпці NOT NULL -> порушення констрейнту */
       res.status(200).send({data: result});
    } catch(error) {
        next(error)
    }
}