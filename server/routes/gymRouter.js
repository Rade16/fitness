const Router = require("express");
const router = new Router();
const controller = require("../controllers/gymController");
const upload = require("../middleware/multer");
// const authMiddleware = require("../middleware/authMiddleware");

router.post("/create", upload.single("image"), controller.create);
router.get("/getAll", controller.getAll);
router.get("/getOne/:id", controller.getOne);

module.exports = router;
