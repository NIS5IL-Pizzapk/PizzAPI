//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Comm = sequelize.define(
    "commande",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      prixTotal: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      dateComm: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      heureComm: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      dateLivr: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      heureLivr: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      commentaires: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Comm;
};
