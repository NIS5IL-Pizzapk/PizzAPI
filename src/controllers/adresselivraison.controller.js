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
        message: "Adresses introuvables : " + err,
      });
    });
};

exports.getAdresseById = (req, res) => {
  AdresseLivraison.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Adress fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.updateAdresse = (req, res) => {
  AdresseLivraison.update(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Adress updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.deleteAdresse = (req, res) => {
  AdresseLivraison.destroy(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Adress deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};
