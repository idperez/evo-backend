const router = require('express').Router();
const facebookController = require('../../controllers/facebook');

router.get('/', facebookController.authenticate);
router.get('/callback', facebookController.callback);
router.get('/privacy', facebookController.privacy);

module.exports = router;
