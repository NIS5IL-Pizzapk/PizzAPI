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
        defaultValue: 6,
      },
      duree_creneau_minutes: {
        type: Sequelize.INTEGER,
        defaultValue: 15,
      },
      debut_premier_creneau: {
        type: Sequelize.TIME,
      },
      fin_dernier_creneau: {
        type: Sequelize.TIME,
      },
    },
    {
      timestamps: false,
    }
  );

  return Restaurant;
};
