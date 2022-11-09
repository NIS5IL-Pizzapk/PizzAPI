const router = require("express").Router();
const commController = require("../controllers/commande.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, commController.getAllCommandes);
router.get("/byid/:id", auth, commController.getCommandeById);
router.post("/create", auth, commController.createCommande);
router.put("/update/:id", auth, commController.updateCommande);
router.delete("/delete/:id", auth, commController.deleteCommande);

module.exports = router;
