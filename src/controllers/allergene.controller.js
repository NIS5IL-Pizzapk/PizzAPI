const db = require("../models/databases/db-config");
const Allergenes = db.allergene;

exports.getAllAllergenes = (req, res) => {
    Allergenes.findAll()
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

exports.getAllergeneById = (req, res) => {
    Allergenes.findByPk(req.params.id)
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

exports.updateAllergene = (req, res) => {
    Allergenes.update(req.params.id)
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

exports.deleteAllergene = (req, res) => {
    Allergenes.destroy(req.params.id)
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
