const router = require("express").Router();

router.get("/health", (_, res) => {
  return res.status(200).send("As Strong as an Ox!");
});

router.use("/", require("./auth.route"));
router.use("/users", require("./user.route"));
router.use("/collective", require("./collective.route"));
router.use("/subscribe", require("./subscribe.route"));
router.use("/follower", require("./followers.route"));

module.exports = router;
