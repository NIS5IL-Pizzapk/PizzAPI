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
    Commande.update(req.params.id)
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
    Commande.destroy(req.params.id)
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
