const db = require("../models/databases/db-config");
const Produit = db.produit;
const PlatCommande = db.platcommande;

exports.getAllProduits = (req, res) => {
  Produit.findAll({
    include: [
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getAllPlats = (req, res) => {
  Produit.findAll({
    where: { supplement: false },
    include: [
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getAllSupplements = (req, res) => {
  Produit.findAll({
    where: { supplement: true },
    include: [
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getProduitById = (req, res) => {
  Produit.findByPk(req.params.id, {
    include: [
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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

exports.updateProduit = (req, res) => {
  const produit = req.body;
  if (req.file) {
    produit.imgPath = `${req.protocol}://${req.get("host")}/images/${
      req.file.filename
    }`;
  }
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
  const produit = req.body;
  produit.imgPath = `${req.protocol}://${req.get("host")}/images/${
    req.file.filename
  }`;
  Produit.create(req.body, { include: [{ model: db.tag }] })
    .then((result) => {
      res.status(200).json({
        message: "Products created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Erreur : " + err,
      });
    });
};

exports.getPlatByTag = (req, res) => {
  Produit.findAll({
    where: { supplement: false },
    include: [
      {
        model: db.tag,
        where: { id: req.params.id },
        attributes: [],
      },
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getSupplementByTag = (req, res) => {
  Produit.findAll({
    where: { supplement: true },
    include: [
      {
        model: db.tag,
        where: { id: req.params.id },
        attributes: [],
      },
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getByPlatCommande = (req, res) => {
  Produit.findAll({
    include: [
      {
        model: db.platcommande,
        where: { id: req.params.id },
        includeIgnoreAttributes: false,
      },
      { model: db.typeProduit, required: false, through: { attributes: [] } },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.addToPlatCommande = (req, res) => {
  Produit.findByPk(req.body.produitId)
    .then((produit) => {
      PlatCommande.findByPk(req.body.platCommandeId)
        .then((platCom) => {
          if (produit != null && platCom != null) {
            platCom.addProduit(produit);
            res.status(200).json({
              message:
                "Produit " +
                produit.nom +
                " ajouté au plat commandé d'id " +
                platCom.id,
            });
          } else {
            res.status(200).json({
              message: "Le plat commandé ou le produit n'existe pas",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            message: "Plat Commandé introuvable : " + err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Produit introuvable : " + err,
      });
    });
};

exports.getPlatsByTypeEtRestaurant = (req, res) => {
  Produit.findAll({
    where: { supplement: false },
    include: [
      {
        model: db.restaurant,
        where: { id: req.body.restaurantId },
        required: true,
        attributes: [],
      },
      {
        model: db.typeProduit,
        where: { id: req.body.typeId },
        required: true,
        attributes: [],
      },
      {
        model: db.tag,
        through: {
          attributes: [],
        },
      },
      {
        model: db.allergenes,
        through: {
          attributes: [],
        },
      },
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
        message: "Produits introuvables : " + err,
      });
    });
};

exports.getSupplementsByTypeEtRestaurant = (req, res) => {
  Produit.findAll({
    where: { supplement: true },
    include: [
      {
        model: db.restaurant,
        where: { id: req.body.restaurantId },
        required: true,
        attributes: [],
      },
      {
        model: db.typeProduit,
        where: { id: req.body.typeId },
        required: true,
        attributes: [],
      },
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
        message: "Produits introuvables : " + err,
      });
    });
};
