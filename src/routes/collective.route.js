const router = require("express").Router();
const { collectivesImage } = require("../middlewares/storage.middleware");
const collectiveHandler = require("../controllers/collective.controller");

const verify_token = require("../middlewares/auth.middleware");

router.post("/create", [collectivesImage], collectiveHandler.createCollective);
router.get("/listByAdmin", collectiveHandler.fetchCollectiveByAdmin);

module.exports = router;
