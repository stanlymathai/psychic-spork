const router = require('express').Router();

const handler = require('../controllers/auth.controller');

router.post('/deactivate', handler.deactivate);
router.post('/register', handler.register);

module.exports = router;
