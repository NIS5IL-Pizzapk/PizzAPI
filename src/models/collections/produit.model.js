//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Prod = sequelize.define(
    "produit",
    {
      produitId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      type: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      prix: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      imgPath: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Prod;
};
