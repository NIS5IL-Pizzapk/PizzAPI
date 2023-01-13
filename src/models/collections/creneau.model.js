//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Creneau = sequelize.define(
    "creneau",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date: {
        type: Sequelize.DATEONLY,
        allowNull: false,
        defaultValue: "anon",
      },
      heure_debut: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      heure_fin: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      nbCommandes: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      ouvert: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Creneau;
};
