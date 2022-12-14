const router = require("express").Router();
const prodController = require("../controllers/produit.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, prodController.getAllProduits);
router.get("/get_all_plats", auth, prodController.getAllPlats);
router.get("/get_all_supplements", auth, prodController.getAllSupplements);
router.get("/by_id/:id", auth, prodController.getProduitById);
router.post("/create", auth, prodController.createProduit);
router.put("/update/:id", auth, prodController.updateProduit);
router.delete("/delete/:id", auth, prodController.deleteProduit);
router.get("/plat_by_tag/:id", prodController.getPlatByTag);
router.get("/supplement_by_tag/:id", prodController.getSupplementByTag);
router.get("/by_plat_commande/:id", prodController.getByPlatCommande);

module.exports = router;
