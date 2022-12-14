const db = require("../models/databases/db-config");
const Produit = db.produit;

exports.getAllProduits = (req, res) => {
  Produit.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getAllPlats = (req, res) => {
  Produit.findAll({ where: { supplement: false } })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getAllSupplements = (req, res) => {
  Produit.findAll({ where: { supplement: true } })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getProduitById = (req, res) => {
  Produit.findByPk(req.params.id)
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

exports.updateProduit = (req, res) => {
  Produit.update(req.params.id)
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

exports.deleteProduit = (req, res) => {
  Produit.destroy(req.params.id)
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

exports.createProduit = (req, res) => {
  Produit.create(req.body)
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

exports.getPlatByTag = (req, res) => {
  Produit.findAll({
    where: { supplement: false },
    include: [{ model: db.tag, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getSupplementByTag = (req, res) => {
  Produit.findAll({
    where: { supplement: true },
    include: [{ model: db.tag, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getByPlatCommande = (req, res) => {
  Produit.findAll({
    include: [{ model: db.platcommande, where: { id: req.params.id } }],
  })
    .then((result) => {
      res.status(200).json({
        message: "Products fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produits introuvables : " + err,
      });
    });
};
