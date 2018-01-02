let router = require('express').Router();
let userController = require('../../controllers/user');

router.get('/', userController.getAll);
router.get('/:_id', userController.findOne);
router.get('/:searchBy/:value', userController.searchByLike);

router.post('/', userController.create);
router.post('/update/:_id', userController.update);
router.post('/login', userController.login);

router.delete('/:id', userController.delete);

module.exports = router;
