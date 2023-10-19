const router = require('express').Router();

const collectiveHandler = require('../controllers/collective.controller');

const verify_token = require('../middlewares/auth.middleware');

router.post('/', verify_token, collectiveHandler.createCollective);
router.get('/', verify_token, collectiveHandler.fetchCollective);

module.exports = router;
