const router = require("express").Router();
const addrController = require("../controllers/adresselivraison.controller");
const auth = require("../middlewares/auth");

router.get("/get_all", auth, addrController.getAllAdresses);
router.get("/by_id/:id", auth, addrController.getAdresseById);
router.post("/create", auth, addrController.createAdresse);
router.put("/update/:id", auth, addrController.updateAdresse);
router.delete("/delete/:id", auth, addrController.deleteAdresse);
//Utiliser cette route pour ajouter une adresse à un utilisateur (params : userId, adresseId)
router.post("/add_adresse", addrController.addToUser);
//Utiliser cette route pour récupérer toutes les adresses actuelles d'un utilisateur
router.get("/current_from_user/:id", addrController.getCurrentAdressesFromUser);
//Utiliser cette route pour récupérer toutes les adresses d'un utilisateur, même celles qui ont été "supprimées" (displayed == false)
router.get("/all_from_user/:id", addrController.getAllAdressesFromUser);

module.exports = router;
