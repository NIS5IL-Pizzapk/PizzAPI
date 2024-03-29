const db = require("../models/databases/db-config");
const Commande = db.commande;

exports.getAllCommandes = (req, res) => {
  Commande.findAll()
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

exports.getCommandeById = (req, res) => {
  Commande.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Adresses fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.updateCommande = (req, res) => {
  Commande.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Adresses fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.deleteCommande = (req, res) => {
  Commande.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Adresses fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.createCommande = (req, res) => {
  Commande.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Commande créée avec succès",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer la commande : " + err,
      });
    });
};

exports.getAllCommandesFromUser = (req, res) => {
  Commande.findAll({
    include: [
      {
        model: db.adresseLivraison,
        include: [
          { model: db.user, where: { id: req.params.id }, attributes: [] },
        ],
      },
      {
        model: db.platcommande,
        include: [{ model: db.produit, through: { attributes: [] } }],
      },
    ],
  })
    .then((result) => {
      res.status(200).json({
        message: "Commandes fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid authentication credentials! : " + err,
      });
    });
};
