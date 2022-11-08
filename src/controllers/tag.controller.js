const db = require("../models/databases/db-config");
const Tag = db.tag;

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
  Tag.update(req.params.id)
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
  Tag.destroy(req.params.id)
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
