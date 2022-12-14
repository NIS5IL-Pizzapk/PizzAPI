const router = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/get_all", auth, userController.getAllUsers);
router.get("/by_id/:id", auth, userController.getUserById);

module.exports = router;
