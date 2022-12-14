//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Resa = sequelize.define(
    "reservation",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      date_resa: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      heure_resa: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      nb_personnes: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Resa;
};
