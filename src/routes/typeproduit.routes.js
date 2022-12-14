const router = require("express").Router();
const typeController = require("../controllers/typeproduit.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, typeController.getAllTypesProduit);
router.get("/by_id/:id", auth, typeController.getTypeProduitById);
router.post("/create", auth, typeController.createTypeProduit);
router.put("/update/:id", auth, typeController.updateTypeProduit);
router.delete("/delete/:id", auth, typeController.deleteTypeProduit);
router.get(
  "/get_by_produit/:id",
  auth,
  typeController.getTypesProduitByProduitId
);
router.get(
  "/get_by_restaurant/:id",
  auth,
  typeController.getTypesProduitByRestaurantId
);
router.post("/add_to_produit", auth, typeController.addToProduit);

module.exports = router;
