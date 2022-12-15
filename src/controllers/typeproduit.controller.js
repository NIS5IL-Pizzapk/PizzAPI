const db = require("../models/databases/db-config");
const typeProduit = db.typeProduit;
const Produit = db.produit;

exports.getAllTypesProduit = (req, res) => {
  typeProduit
    .findAll()
    .then((result) => {
      res.status(200).json({
        message: "Types fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Types introuvables : " + err,
      });
    });
};

exports.getTypeProduitById = (req, res) => {
  typeProduit
    .findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Type fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Type introuvable : " + err,
      });
    });
};

exports.updateTypeProduit = (req, res) => {
  typeProduit
    .update(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Types fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Type introuvable : " + err,
      });
    });
};

exports.deleteTypeProduit = (req, res) => {
  typeProduit
    .destroy(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Type deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Type introuvable : " + err,
      });
    });
};

exports.createTypeProduit = (req, res) => {
  typeProduit
    .create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Type created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer le type : " + err,
      });
    });
};

exports.getTypesProduitByProduitId = (req, res) => {
  typeProduit
    .findAll({
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
        message: "Types fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de récupérer les types : " + err,
      });
    });
};

exports.getTypesProduitByRestaurantId = (req, res) => {
  typeProduit
    .findAll({
      include: [
        {
          model: db.produit,
          where: { restaurantId: req.params.id },
          required: true,
          through: {
            attributes: [],
          },
        },
      ],
    })
    .then((result) => {
      res.status(200).json({
        message: "Types fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de récupérer les types : " + err,
      });
    });
};

exports.addToProduit = (req, res, next) => {
  //On ajoute une adresse à l'utilisateur
  typeProduit
    .findByPk(req.body.typeId)
    .then((type) => {
      Produit.findByPk(req.body.produitId)
        .then((produit) => {
          if (type != null && produit != null) {
            type.addProduit(produit);
            res.status(200).json({
              message: "Type " + type.nom + " ajouté au produit " + produit.nom,
            });
          } else {
            res.status(200).json({
              message: "Le type ou le produit n'existe pas",
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
        message: "Type introuvable : " + err,
      });
    });
};
