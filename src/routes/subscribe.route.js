const router = require("express").Router();

const subscribeHandler = require("../controllers/subscribe.controller");

const verify_token = require("../middlewares/auth.middleware");

router.post("/request", subscribeHandler.subscribeRequest);

module.exports = router;
