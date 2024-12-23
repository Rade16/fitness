const Router = require("express");

const router = new Router();

const authRouter = require("./authRouter");
const classRouter = require("./classRouter");
const gymRouter = require("./gymRouter");
const membershipRouter = require("./membershipRouter");
router.use("/auth", authRouter);
router.use("/class", classRouter);
router.use("/gym", gymRouter);
router.use("/membership", membershipRouter);

module.exports = router;
