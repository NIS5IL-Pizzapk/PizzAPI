const router = require("express").Router();
const platComController = require("../controllers/platcommande.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, platCommandeController.getAllPlatsCommandes);
router.get("/byid/:id", auth, platComController.getPlatCommandeById);
router.post("/create", auth, platComController.createPlatCommande);
router.put("/update/:id", auth, platComController.updatePlatCommande);
router.delete("/delete/:id", auth, platComController.deletePlatCommande);

module.exports = router;
