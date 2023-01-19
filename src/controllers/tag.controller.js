const db = require("../models/databases/db-config");
const Tag = db.tag;
const Produit = db.produit;

exports.getAllTags = (req, res) => {
  Tag.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Tags fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Tags introuvables : " + err,
      });
    });
};

exports.getTagById = (req, res) => {
  Tag.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Tag fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Tag introuvable : " + err,
      });
    });
};

exports.updateTag = (req, res) => {
  Tag.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Tag updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Tag introuvable : " + err,
      });
    });
};

exports.deleteTag = (req, res) => {
  Tag.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Tag deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Tag introuvable : " + err,
      });
    });
};

exports.createTag = (req, res) => {
  Tag.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Tag created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Tag introuvable : " + err,
      });
    });
};

exports.getTagByProduitId = (req, res) => {
  Tag.findAll({
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
        message: "Tags fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de récupérer les tags : " + err,
      });
    });
};

exports.addToProduit = (req, res, next) => {
  //On ajoute une adresse à l'utilisateur
  Tag.findByPk(req.body.tagId)
    .then((tag) => {
      Produit.findByPk(req.body.produitId)
        .then((produit) => {
          if (tag != null && produit != null) {
            tag.addProduit(produit);
            res.status(200).json({
              message: "Tag " + tag.nom + " ajouté au produit " + produit.nom,
            });
          } else {
            res.status(200).json({
              message: "Le tag ou le produit n'existe pas",
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
        message: "Tag introuvable : " + err,
      });
    });
};
