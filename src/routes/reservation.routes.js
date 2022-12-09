const router = require("express").Router();
const resaController = require("../controllers/reservation.controller");
const auth = require("../middlewares/auth");

router.get("/getall", auth, resaController.getAllReservations);
router.get("/byid/:id", auth, resaController.getReservationById);
router.post("/create", auth, resaController.createReservation);
router.put("/update/:id", auth, resaController.updateReservation);
router.delete("/delete/:id", auth, resaController.deleteReservation);
//Utiliser cette route pour récupérer toutes les réservations d'un utilisateur
router.get("/all-from-user/:id", resaController.getAllReservationsFromUser);

module.exports = router;
