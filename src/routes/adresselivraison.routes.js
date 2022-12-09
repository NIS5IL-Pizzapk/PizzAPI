const router = require("express").Router();
const addrController = require("../controllers/adresselivraison.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, addrController.getAllAdresses);
router.get("/byid/:id", auth, addrController.getAdresseById);
router.post("/create", auth, addrController.createAdresse);
router.put("/update/:id", auth, addrController.updateAdresse);
router.delete("/delete/:id", auth, addrController.deleteAdresse);
//Utiliser cette route pour ajouter une adresse à un utilisateur (params : userId, adresseId)
router.post("/add-adresse", addrController.addToUser);
//Utiliser cette route pour récupérer toutes les adresses actuelles d'un utilisateur
router.get("/current-from-user/:id", addrController.getCurrentAdressesFromUser);
//Utiliser cette route pour récupérer toutes les adresses d'un utilisateur, même celles qui ont été "supprimées" (displayed == false)
router.get("/all-from-user/:id", addrController.getAllAdressesFromUser);

module.exports = router;
