const Express = require('express').Router;
const userController = require('../controllers/userController');
const { userSchema } = require('../schemas/schemas');
const { validation } = require('../middlewares/validate');

const router = Express();

router.get('/', userController.getUsers);

router.get('/:id', userController.getUser);

router.post('/', validation(userSchema), userController.addUser);

router.post('/subtype', userController.addUserToSubtype);

router.delete('/delete/:id', userController.deleteUser);

router.put('/update/:id', userController.updateUser);

router.get('/views/userspergroup', userController.usersPerGroup);

module.exports = router;
