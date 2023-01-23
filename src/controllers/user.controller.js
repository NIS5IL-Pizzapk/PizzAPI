//Imports
const db = require("../models/databases/db-config");
const User = db.users;
const AdresseLivraison = db.adresseLivraison;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const mailer = require("../middlewares/mailer");

//=======================================
// Routes
//=======================================

//Route de création d'un utilisateur
exports.signup = (req, res, next) => {
  //On hash le mot de passe
  bcrypt.hash(req.body.password, 10).then((hash) => {
    //On crée un nouvel utilisateur
    const user = {
      username: req.body.username,
      password: hash,
      email: req.body.email,
    };
    //On sauvegarde l'utilisateur dans la bdd
    User.create(user)
      .then((result) => {
        res.status(201).json({
          message: "User created",
          result: result,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Invalid authentication credentials!" + err,
        });
      });
  });
};

//GetAllUsers
exports.getAllUsers = (_req, res, _next) => {
  User.findAll({ attributes: { exclude: ["password"] } })
    .then((result) => {
      res.status(200).json({
        message: "Users fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid authentication credentials! : " + err,
      });
    });
};

exports.getUserById = (req, res, next) => {
  if (req.auth.userId !== req.params.id) {
    return res.status(401).json({
      message: "Invalid authentication credentials!",
    });
  }
  User.findByPk(req.params.id.toInteger(), {
    attributes: { exclude: ["password"] },
  })
    .then((result) => {
      res.status(200).json({
        message: "User fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "An error occured : " + err,
      });
    });
};

//connexion d'un utilisateur
exports.login = (req, res, next) => {
  let fetchedUser;
  //On cherche l'utilisateur dans la bdd
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      //Si l'utilisateur n'existe pas
      if (!user) {
        res.status(401).json({
          message: "Auth failed 1",
        });
      } else {
        //On stocke l'utilisateur dans une variable
        fetchedUser = user;
        //On compare le mot de passe entré avec le hash
        result = bcrypt.compare(
          req.body.password,
          user.password,
          function (err, result) {
            if (err) {
              // handle error
              res.status(401).json({
                message: "Auth failed : " + err,
              });
            }
            if (result) {
              //On crée un token
              //username et userId sont des données qu'on peut récupérer dans le token
              //JWT_KEY est la clé secrète pour le token
              const token = jwt.sign(
                {
                  username: fetchedUser.username,
                  userId: fetchedUser.id,
                  email: fetchedUser.email,
                  admin: fetchedUser.admin,
                },
                process.env.JWT_KEY,
                { expiresIn: "1h" }
              );
              //Si le mot de passe est correct
              res.status(200).json({
                message: "Auth successful",
                result: fetchedUser,
                token: token,
              });
            } else {
              res.status(401).json({
                message: "Auth failed 2",
              });
            }
          }
        );
      }
    })
    .catch((err) => {
      res.status(401).json({
        message: "Invalid authentication credentials!" + err,
      });
    });
};

exports.resetPassword = (req, res, next) => {
  User.findOne({ where: { email: req.body.email } })
    .then((user) => {
      if (!user) {
        return res.status(401).json({
          message: "Auth failed: User with that email not found",
        });
      }
      const newPass = "123456";
      User.update({ password: newPass }, { where: { email: req.body.email } })
        .then((result) => {
          const mail = user.email;
          console.log("in user controller, mail : ", mail);
          mailer.sendMailTest(mail);
          res.status(200).json({
            message: "Password updated successfully",
          });
        })
        .catch((err) => {
          res.status(500).json({
            message: "Error updating password" + err,
          });
        });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Error finding user" + req.body.email,
      });
    });
};

exports.updateUser = (req, res) => {
  User.update(req.body, { where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "User updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Utilisateur introuvable : " + err,
      });
    });
};

exports.deleteUser = (req, res) => {
  User.destroy({ where: { id: req.params.id } })
    .then((result) => {
      res.status(200).json({
        message: "User deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Utilisateur introuvable : " + err,
      });
    });
};
