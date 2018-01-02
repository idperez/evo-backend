const router = require('express').Router();
const userRoutes = require('./users');
const facebookRoutes = require('./facebook');

router.use('/user', userRoutes);
router.use('/facebook', facebookRoutes);

module.exports = router;
