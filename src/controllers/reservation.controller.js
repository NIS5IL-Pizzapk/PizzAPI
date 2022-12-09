const db = require("../models/databases/db-config");
const Reservation = db.reservation;
const User = db.users;

exports.getAllReservations = (req, res) => {
  Reservation.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Reservations fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Reservations introuvables : " + err,
      });
    });
};

exports.getReservationById = (req, res) => {
  Reservation.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Reservation fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Reservation introuvable : " + err,
      });
    });
};

exports.updateReservation = (req, res) => {
  Reservation.update(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Reservation updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Reservation introuvable : " + err,
      });
    });
};

exports.deleteReservation = (req, res) => {
  Reservation.destroy(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Reservation deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Reservation introuvable : " + err,
      });
    });
};

exports.createReservation = (req, res) => {
  Reservation.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Reservation created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer la reservation : " + err,
      });
    });
};

exports.getAllReservationsFromUser = (req, res, next) => {
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
        .getReservations()
        .then((result) => {
          res.status(200).json({
            message: "Reservations fetched successfully",
            result: result,
          });
        })
        .catch((err) => {
          res.status(500).json({
            message:
              "Impossible d'obtenir les reservations associées à l'utilisateur : " +
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
