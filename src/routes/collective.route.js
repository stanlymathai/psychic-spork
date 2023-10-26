const router = require("express").Router();
const { collectivesImage } = require("../middlewares/storage.middleware");
const collectiveHandler = require("../controllers/collective.controller");

const verify_token = require("../middlewares/auth.middleware");

router.post("/create", [collectivesImage], collectiveHandler.createCollective);
router.get("/list_by_admin", collectiveHandler.fetchCollectiveByAdmin);
router.get("/get_all_collective", collectiveHandler.fetchAllCollective);

module.exports = router;
