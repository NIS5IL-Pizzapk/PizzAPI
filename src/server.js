const express = require("express"); // Import express
const cors = require("cors"); // Import cors
const db = require("./models/databases/db-config"); // Import db
require("dotenv").config(); // Import dotenv
const swaggerUi = require("swagger-ui-express"); // Import swagger
const swaggerFile = require("./swagger_output.json"); // Import swagger
const path = require("path"); // Import path

//=======================================
// Constantes et variables
//=======================================

const hostname = process.env.SERVER_HOST || "localhost";
const port = process.env.PORT || 3000;

//=======================================
// Express configuration
//=======================================

const app = express(); // Create express app
app.use(express.json()); // On reçoit tout en JSON
app.use(express.urlencoded({ extended: true })); // Je sais pas mais c'est important visiblement
db.sequelize.sync(); // Syncronise la bdd avec les modèles

//=======================================
// CORS configuration
//=======================================

app.use(cors());

//=======================================
// Server Listening
//=======================================
//Ecoute le port/host défini plus tôt et affiche un message dans la console
//Si le serveur est lancé avec nodemon, il se relance à chaque modification
//On a l'url de base de l'api dans la string
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

//=======================================
// Routes Controllers
//=======================================

app.use("/api/adresse", require("./routes/adresselivraison.routes"));
app.use("/api/allergene", require("./routes/allergene.routes"));
app.use("/api/commande", require("./routes/commande.routes"));
app.use("/api/platcommande", require("./routes/platcommande.routes"));
app.use("/api/produit", require("./routes/produit.routes"));
app.use("/api/tag", require("./routes/tag.routes"));
app.use("/api/user", require("./routes/user.routes"));
app.use("/api/reservation", require("./routes/reservation.routes"));
app.use("/api/restaurant", require("./routes/restaurant.routes"));
app.use("/api/typeproduit", require("./routes/typeproduit.routes"));
app.use("/api/creneau", require("./routes/creneau.routes"));

//SWAGGER
app.use("/api-doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

//Autoriser l'accès au dossier images de l'API

app.use("/images", express.static(path.join(__dirname, "images")));
