const router = require("express").Router();
const userController = require("../controllers/user.controller");
const auth = require("../middlewares/auth");

router.post("/signup", userController.signup);
router.post("/login", userController.login);
router.get("/getall", auth, userController.getAllUsers);
router.get("/byid/:id", auth, userController.getUserById);
router.post("/add-adresse", userController.addAdresse);

module.exports = router;
