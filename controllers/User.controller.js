const {User, Group} = require('../models');
const createError = require('http-errors');

module.exports.createOne = async (req, res, next) => {
    try {
        const {body} = req;
        const createdUser = await User.create(body);
        res.status(201).send({data: createdUser});
    } catch(error) {
        next(error)
    }
}


module.exports.findOne = async (req, res, next) => {
    try {
        const {params: {id}} = req;
        const foundedUser = await User.findByPk(id);
        if (!foundedUser) {
            const error = createError(404, 'User not found');
            return next(error);
        }
        res.status(200).send({data: foundedUser});
    } catch(error) {
        next(error)
    }
}

/*
Пагінація:
limit - кількість результатів на отримання з бази
offset - відступ по кількості від початку

*/

module.exports.findAll = async (req, res, next) => {
    try {
       /// очікуємо, що у нас є готовий об'єкт пагінації
       const {pagination} = req;
        const foundedUsers = await User.findAll({
            attributes: {
                exclude: ['password']
            },
           ...pagination
        });
        res.status(200).send({data: foundedUsers});
    } catch(error) {
        next(error)
    }
}


// module.exports.deleteOne = async (req, res, next) => {
//     try {
//         const {params: {id}} = req;
//         const foundedUser = await User.findByPk(id);
//        const returnedValue = await foundedUser.destroy();
//        res.status(200).send(returnedValue);
//     } catch(error) {
//         next(error)
//     }
// }

module.exports.deleteOne = async (req, res, next) => {
        try {
            const {params: {id}} = req;
           const deleted = await User.destroy({
            where: {
                id: Number(id)
            }
           });
           return res.status(200).send({meta: {
                                        deletedCount: deleted}});
           /*
           Express не розуміє нас правильно, коли ми намагаємось відправити send() примітивне число. Він його сприймає як "статус-код" процесу сервера 
           */
          
        //    if(rowCount) {
        //     return res.status(200).send('User successfully deleted');
        //    }
        //    res.status(404).send('not found');
        } catch(error) {
            next(error)
        }
    }

    /// static method:
    // User.update (updateValues, {
    //    where: .....
   // })
   /// instanse method:
   // user.update(updateValues);

//    module.exports.updateOne = async (req, res, next) => {
//     try {
//     const {params: {id}, body} = req;
//     const user = await User.findByPk(Number(id));
//     const updatedUser = await user.update(body, {
//         returning: true
//     });
//     res.status(200).send({data: updatedUser});
//     } catch(error) {
//         next(error);
//     }
//    }

   module.exports.updateOne = async (req, res, next) => {
    try {
        const {params: {id}, body} = req;
        const [rowCount, updated] = await User.update(body, {
            where: {
                id
            },
            returning: true
        });
        res.status(200).send({data: updated});
    } catch(error) {
        next(error);
    }
   }


/*
Домовляємось:
{
    data - інформація (дані) (якщо є)
    errors - помилки (якщо є)
    meta - метаінформація (якщо є)
}

*/



/// Зробити метод юзеру getUserWithGroups

module.exports.getUserWithGroups = async (req, res, next) => {
    try {
        const {params: {userId}} = req;
        const userWithGroups = await User.findAll({
            where: {
                id: userId
            },
            include: [{
                model: Group
            }],
            attributes: {
                exclude: ['password']
            }
        });
        res.status(200).send({data: userWithGroups})
    } catch(error) {
        next(error)
    }
}