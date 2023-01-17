const router = require("express").Router();
const crenController = require("../controllers/creneau.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, crenController.getAllCreneaux);
router.get("/by_id/:id", auth, crenController.getCreneauById);
router.post("/create", auth, crenController.createCreneau);
router.put("/update/:id", auth, crenController.updateCreneau);
router.delete("/delete/:id", auth, crenController.deleteCreneau);

module.exports = router;
