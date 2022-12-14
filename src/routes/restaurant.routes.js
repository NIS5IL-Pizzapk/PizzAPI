const router = require("express").Router();
const restoController = require("../controllers/restaurant.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, restoController.getAllRestaurants);
router.get("/by_id/:id", auth, restoController.getRestaurantById);
router.post("/create", auth, restoController.createRestaurant);
router.put("/update/:id", auth, restoController.updateRestaurant);
router.delete("/delete/:id", auth, restoController.deleteRestaurant);

module.exports = router;
