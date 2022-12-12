const db = require("../models/databases/db-config");
const Allergenes = db.allergenes;
const Produit = db.produit;

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

exports.createAllergene = (req, res) => {
  Allergenes.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Allergene created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer l'allergene : " + err,
      });
    });
};

exports.getAllergeneByProduitId = (req, res) => {
  Allergenes.findAll({
    include: [
      {
        model: db.produit,
        attributes: ["id", "type", "nom"],
        where: { id: req.params.id },
        required: true,
      },
    ],
  })
    .then((result) => {
      res.status(200).json({
        message: "Allergenes fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de récupérer les allergenes : " + err,
      });
    });
};

exports.addToProduit = (req, res, next) => {
  //On ajoute une adresse à l'utilisateur
  Allergenes.findByPk(req.body.allergeneId)
    .then((alrg) => {
      Produit.findByPk(req.body.produitId)
        .then((produit) => {
          if (alrg != null && produit != null) {
            alrg.addProduit(produit);
            res.status(200).json({
              message:
                "Allergène " + alrg.nom + " ajouté au produit " + produit.nom,
            });
          } else {
            res.status(200).json({
              message: "L'allergène ou le produit n'existe pas",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            message: "Produit introuvable : " + err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Allergene introuvable : " + err,
      });
    });
};
