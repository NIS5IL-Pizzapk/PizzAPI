const router = require("express").Router();
const alrgController = require("../controllers/allergene.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, alrgController.getAllAllergenes);
router.get("/by_id/:id", auth, alrgController.getAllergeneById);
router.post("/create", auth, alrgController.createAllergene);
router.put("/update/:id", auth, alrgController.updateAllergene);
router.delete("/delete/:id", auth, alrgController.deleteAllergene);
router.get("/get_by_produit/:id", auth, alrgController.getAllergeneByProduitId);
router.post("/add_to_produit", auth, alrgController.addToProduit);

module.exports = router;
