const router = require("express").Router();
const tagController = require("../controllers/tag.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, tagController.getAllTags);
router.get("/byid/:id", auth, tagController.getTagById);
router.post("/create", auth, tagController.createTag);
router.put("/update/:id", auth, tagController.updateTag);
router.delete("/delete/:id", auth, tagController.deleteTag);
router.get("/by_produit/:id", auth, tagController.getTagByProduitId);
router.post("/add_to_produit", auth, tagController.addToProduit);

module.exports = router;
