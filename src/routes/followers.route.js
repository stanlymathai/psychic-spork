const router = require("express").Router();

const followerHandler = require("../controllers/followers.controller");

const verify_token = require("../middlewares/auth.middleware");

router.post("/request", followerHandler.createRequest);

module.exports = router;
