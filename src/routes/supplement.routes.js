const router = require("express").Router();
const addrController = require("../controllers/supplement.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, addrController.getAllSupplements);
router.get("/byid/:id", auth, addrController.getSupplementById);
router.get("/update/:id", auth, addrController.updateSupplement);
router.get("/delete/:id", auth, addrController.deleteSupplement);


module.exports = router;
