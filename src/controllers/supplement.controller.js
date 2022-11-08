const db = require("../models/databases/db-config");
const Supplement = db.supplement;

exports.getAllSupplements = (req, res) => {
    Supplement.findAll()
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

exports.getSupplementById = (req, res) => {
    Supplement.findByPk(req.params.id)
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

exports.updateSupplement = (req, res) => {
    Supplement.update(req.params.id)
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

exports.deleteSupplement = (req, res) => {
    Supplement.destroy(req.params.id)
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
