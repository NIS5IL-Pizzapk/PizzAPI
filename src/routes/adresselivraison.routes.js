const router = require("express").Router();
const addrController = require("../controllers/adresselivraison.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, addrController.getAllAdresses);
router.get("/byid/:id", auth, addrController.getAdresseById);
router.post("/create", auth, addrController.createSupplement);
router.put("/update/:id", auth, addrController.updateAdresse);
router.delete("/delete/:id", auth, addrController.deleteAdresse);

module.exports = router;
