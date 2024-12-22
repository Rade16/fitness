const Router = require("express");
const router = new Router();
const controller = require("../controllers/authController");
const { check } = require("express-validator");
const authMiddleware = require("../middleware/authMiddleware");
const uploads = require("../middleware/multer");
router.post(
  "/registration",
  check("username")
    .isLength({ min: 2, max: 20 })
    .withMessage("Имя пользователя должно содержать от 2 до 25 символов."),
  check("password")
    .isLength({ min: 6, max: 40 })
    .withMessage("Пароль не должен быть короче 6 символов."),

  controller.registration
);
router.post("/login", controller.login);
router.get("/users", controller.getUsers);
router.get("/auth", authMiddleware, controller.auth);
router.put(
  "/update/:id",
  uploads.single("avatar"),
  authMiddleware,
  controller.updateUser
);

module.exports = router;
