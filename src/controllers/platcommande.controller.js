const db = require("../models/databases/db-config");
const PlatComm = db.platcommande;

exports.getAllPlatsCommandes = (req, res) => {
  PlatComm.findAll({
    include: [
      { model: db.produit, required: false, through: { attributes: [] } },
    ],
  })
    .then((result) => {
      res.status(200).json({
        message: "Plats fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getPlatCommandeById = (req, res) => {
  PlatComm.findByPk(req.params.id, {
    include: [
      { model: db.produit, required: false, through: { attributes: [] } },
    ],
  })
    .then((result) => {
      res.status(200).json({
        message: "Product fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produit introuvable : " + err,
      });
    });
};

exports.updatePlatCommande = (req, res) => {
  PlatComm.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Products updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produit introuvable : " + err,
      });
    });
};

exports.deletePlatCommande = (req, res) => {
  PlatComm.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Products deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.createPlatCommande = (req, res) => {
  PlatComm.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Products created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produit introuvable : " + err,
      });
    });
};

exports.getByCommande = (req, res) => {
  PlatComm.findAll({
    where: {
      commandeId: req.params.id,
    },
    include: [
      { model: db.produit, required: false, through: { attributes: [] } },
    ],
  })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produit introuvable : " + err,
      });
    });
};
