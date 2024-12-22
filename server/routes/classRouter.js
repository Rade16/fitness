const Router = require("express");
const router = new Router();

const controller = require("../controllers/classController");

router.post("/create", controller.create);
router.get("/getAll", controller.getAll);

module.exports = router;
