const { Sequelize } = require("../models/databases/db-config");
const db = require("../models/databases/db-config");
const Creneau = db.creneau;

exports.getAllCreneaux = (req, res) => {
  Creneau.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Creneaux fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error : " + err,
      });
    });
};

exports.getCreneauById = (req, res) => {
  Creneau.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Creneaux fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Creneau introuvable : " + err,
      });
    });
};

exports.updateCreneau = (req, res) => {
  Creneaux.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Creneau updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Creneau introuvable : " + err,
      });
    });
};

exports.deleteCreneau = (req, res) => {
  Creneau.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Creneau deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Creneau introuvable : " + err,
      });
    });
};

exports.createCreneau = (req, res) => {
  Creneau.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Creneau created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer le creneau : " + err,
      });
    });
};

//TODO : A revoir

//WIP
exports.premierCreneauDispo = (req, res) => {
  Creneau.findAll({
    where: {
      date: Sequelize.fn("CURDATE"),
      nbCommande: 0,
      heure_debut: { [Sequelize.Op.gt]: Sequelize.fn("CURTIME") },
      ouvert: true,
    },
    order: [["heure_debut", "ASC"]],
    limit: 1,
  })
    .then((result) => {
      res.status(200).json({
        message: "Creneau fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error : " + err,
      });
    });
};
