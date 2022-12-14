const db = require("../models/databases/db-config");
const Restaurant = db.Restaurant;
const Produit = db.produit;

exports.getAllRestaurants = (req, res) => {
  Restaurant.findAll()
    .then((result) => {
      res.status(200).json({
        message: "Restaurants fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Restaurants introuvables : " + err,
      });
    });
};

exports.getRestaurantById = (req, res) => {
  Restaurant.findByPk(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Restaurant fetched successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Restaurant introuvable : " + err,
      });
    });
};

exports.updateRestaurant = (req, res) => {
  Restaurant.update(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Restaurant updated successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Restaurant introuvable : " + err,
      });
    });
};

exports.deleteRestaurant = (req, res) => {
  Restaurant.destroy(req.params.id)
    .then((result) => {
      res.status(200).json({
        message: "Restaurant deleted successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Restaurant introuvable : " + err,
      });
    });
};

exports.createRestaurant = (req, res) => {
  Restaurant.create(req.body)
    .then((result) => {
      res.status(200).json({
        message: "Restaurant created successfully",
        result: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Impossible de créer le restaurant : " + err,
      });
    });
};
