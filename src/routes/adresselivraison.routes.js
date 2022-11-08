const router = require("express").Router();
const addrController = require("../controllers/adresselivraison.controller");
const auth = require("../middlewares/auth");

router.get("/getall", addrController.getAllAdresses);

module.exports = router;
