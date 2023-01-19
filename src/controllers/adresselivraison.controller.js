const db = require("../models/databases/db-config");
const AdresseLivraison = db.adresseLivraison;
const User = db.users;

exports.getAllAdresses = (req, res) => {
  AdresseLivraison.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Adresses fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresses introuvables : " + err,
      });
    });
};

exports.getAdresseById = (req, res) => {
  AdresseLivraison.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Adress fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.updateAdresse = (req, res) => {
  AdresseLivraison.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Adress updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.deleteAdresse = (req, res) => {
  AdresseLivraison.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "Adress deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Adresse introuvable : " + err,
      });
    });
};

exports.createAdresse = (req, res) => {
  AdresseLivraison.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Adress created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer l'adresse : " + err,
      });
    });
};

exports.addToUser = (req, res, next) => {
  //On ajoute une adresse à l'utilisateur
  User.findByPk(req.body.userId)
    .then((user) => {
      AddresseLivraison.findByPk(req.body.adresseId)
        .then((adresse) => {
          if (user != null && adresse != null) {
            user.addAdresseLivraison(adresse);
            res.status(200).json({
              message: "Adresse added to user",
              result: user,
            });
          } else {
            res.status(200).json({
              message: "L'adresse ou l'utilisateur n'existe pas",
            });
          }
        })
        .catch((err) => {
          res.status(500).json({
            message: "Adresse de livraison introuvable : " + err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Utilisateur introuvable : " + err,
      });
    });
};

exports.getCurrentAdressesFromUser = (req, res, next) => {
  if (req.auth.userId !== req.params.id && !req.auth.admin) {
    return res.status(401).json({
      message: "Invalid authentication credentials!",
    });
  }
  User.findByPk(req.params.id)
    .then((user) => {
      if (user == null) {
        return res.status(200).json({
          message: "L'utilisateur n'existe pas",
        });
      }
      user
        .getAdresseLivraisons({ where: { displayed: true } })
        .then((result) => {
          res.status(200).json({
            message: "Adresses fetched successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message:
              "Impossible d'obtenir les adresses de livraison associées à l'utilisateur : " +
              err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Utilisateur introuvable : " + err,
      });
    });
};

exports.getAllAdressesFromUser = (req, res, next) => {
  if (req.auth.userId !== req.params.id && !req.auth.admin) {
    return res.status(401).json({
      message: "Invalid authentication credentials!",
    });
  }
  User.findByPk(req.params.id)
    .then((user) => {
      if (user == null) {
        return res.status(200).json({
          message: "L'utilisateur n'existe pas",
        });
      }
      user
        .getAdresseLivraisons()
        .then((result) => {
          res.status(200).json({
            message: "Adresses fetched successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message:
              "Impossible d'obtenir les adresses de livraison associées à l'utilisateur : " +
              err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Utilisateur introuvable : " + err,
      });
    });
};
