const router = require("express").Router();
const tagController = require("../controllers/tag.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, tagController.getAllTags);
router.get("/by_id/:id", auth, tagController.getTagById);
router.post("/create", auth, tagController.createTag);
router.put("/update/:id", auth, tagController.updateTag);
router.delete("/delete/:id", auth, tagController.deleteTag);
router.get("/by_produit/:id", auth, tagController.getTagByProduitId);
router.post("/add_to_produit", auth, tagController.addToProduit);

module.exports = router;
