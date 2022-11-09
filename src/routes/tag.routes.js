const router = require("express").Router();
const tagController = require("../controllers/tag.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, tagController.getAllTags);
router.get("/byid/:id", auth, tagController.getTagById);
router.post("/create", auth, tagController.createTag);
router.put("/update/:id", auth, tagController.updateTag);
router.delete("/delete/:id", auth, tagController.deleteTag);

module.exports = router;
