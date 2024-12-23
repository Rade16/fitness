const Router = require("express");
const router = new Router();

const controller = require("../controllers/membershipController");

router.post("/buy", controller.buyMembership);
router.get("/current/:id", controller.getCurrentMembership);
module.exports = router;
