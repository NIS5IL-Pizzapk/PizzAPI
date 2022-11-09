const router = require("express").Router();
const suppController = require("../controllers/supplement.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, suppController.getAllSupplements);
router.get("/byid/:id", auth, suppController.getSupplementById);
router.post("/create", auth, suppController.createSupplement);
router.get("/update/:id", auth, suppController.updateSupplement);
router.get("/delete/:id", auth, suppController.deleteSupplement);

module.exports = router;
