const router = require("express").Router();
const alrgController = require("../controllers/allergene.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, alrgController.getAllAllergenes);
router.get("/byid/:id", auth, alrgController.getAllergeneById);
router.put("/update/:id", auth, alrgController.updateAllergene);
router.delete("/delete/:id", auth, alrgController.deleteAllergene);

module.exports = router;
