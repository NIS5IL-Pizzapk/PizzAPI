//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Restaurant = sequelize.define(
    "restaurant",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      ville: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      adresse: {
        type: Sequelize.STRING,
      },
      heure_max_commande: {
        type: Sequelize.TIME,
      },
      plats_par_creneau: {
        type: Sequelize.INTEGER,
      },
      premier_creneau: {
        type: Sequelize.TIME,
      },
      dernier_creneau: {
        type: Sequelize.TIME,
      },
    },
    {
      timestamps: false,
    }
  );

  return Restaurant;
};
