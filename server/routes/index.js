const Router = require("express");

const router = new Router();

const authRouter = require("./authRouter");
const classRouter = require("./classRouter");
const gymRouter = require("./gymRouter");
router.use("/auth", authRouter);
router.use("/class", classRouter);
router.use("/gym", gymRouter);

module.exports = router;
