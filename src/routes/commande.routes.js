const router = require("express").Router();
const addrController = require("../controllers/commande.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, addrController.getAllCommandes);
router.get("/byid/:id", auth, addrController.getCommandeById);
router.put("/update/:id", auth, addrController.updateCommande);
router.delete("/delete/:id", auth, addrController.deleteCommande);

module.exports = router;
