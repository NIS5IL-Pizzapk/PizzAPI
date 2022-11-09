const router = require("express").Router();
const prodController = require("../controllers/produit.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, prodController.getAllProduits);
router.get("/byid/:id", auth, prodController.getProduitById);
router.put("/update/:id", auth, prodController.updateProduit);
router.delete("/delete/:id", auth, prodController.deleteProduit);

module.exports = router;
