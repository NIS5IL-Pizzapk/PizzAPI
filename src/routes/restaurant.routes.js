const router = require("express").Router();
const restoController = require("../controllers/restaurant.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", restoController.getAllRestaurants);
router.get("/by_id/:id", restoController.getRestaurantById);
router.post("/create", auth, restoController.createRestaurant);
router.put("/update/:id", auth, restoController.updateRestaurant);
router.delete("/delete/:id", auth, restoController.deleteRestaurant);

module.exports = router;
