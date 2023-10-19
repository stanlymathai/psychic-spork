const router = require('express').Router();
const handler = require('../controllers/user.controller');
const verify_token = require('../middlewares/auth.middleware');

router.post('/update', verify_token, handler.updateUser);

module.exports = router;
