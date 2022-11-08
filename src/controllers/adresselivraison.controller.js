const db = require("../models/databases/db-config");
const AdresseLivraison = db.adresseLivraison;

exports.getAllAdresses = (req, res) => {
  AdresseLivraison.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Adresses fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid authentication credentials! : " + err,
      });
    });
};
