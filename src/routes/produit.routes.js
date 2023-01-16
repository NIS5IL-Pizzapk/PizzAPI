const router = require("express").Router();
const prodController = require("../controllers/produit.controller");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/upload");

router.get("/get_all", auth, prodController.getAllProduits);
router.get("/by_id/:id", auth, prodController.getProduitById);
router.post("/create", auth, upload, prodController.createProduit);
router.put("/update/:id", auth, upload, prodController.updateProduit);
router.delete("/delete/:id", auth, prodController.deleteProduit);
router.get("/by_plat_commande/:id", prodController.getByPlatCommande);
router.post("/add_to_plat_commande", prodController.addToPlatCommande);

router.get("/plat/get_all", auth, prodController.getAllPlats);
router.get("/plat/by_tag/:id", prodController.getPlatByTag);
router.post(
  "/plat/by_type_et_restaurant",
  prodController.getPlatsByTypeEtRestaurant
);

router.get("/supplement/get_all", auth, prodController.getAllSupplements);
router.get("/supplement/by_tag/:id", prodController.getSupplementByTag);
router.post(
  "/supplement/by_type_et_restaurant",
  prodController.getSupplementsByTypeEtRestaurant
);

module.exports = router;
