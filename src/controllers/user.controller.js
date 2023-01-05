//Imports
const db = require("../models/databases/db-config");
const User = db.users;
const AdresseLivraison = db.adresseLivraison;
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

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
          message: "Invalid authentication credentials!",
        });
      });
  });
};

//GetAllUsers
exports.getAllUsers = (_req, res, _next) => {
  User.findAll()
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


exports.updateUser = (req, res) => {
  User.update(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "User fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "User introuvable : " + err,
      });
    });
};

exports.getUserById = (req, res, next) => {
  if (req.auth.userId !== req.params.id) {
    return res.status(401).json({
      message: "Invalid authentication credentials!",
    });
  }
  User.findByPk(req.params.id.toInteger())
    .then((result) => {
      res.status(200).json({
        message: "User fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Invalid id",
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
                  userId: fetchedUser._id,
                  email: fetchedUser.email,
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
        message: "Invalid authentication credentials!",
      });
    });
};
