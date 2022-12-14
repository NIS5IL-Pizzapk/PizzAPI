//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Prod = sequelize.define(
    "produit",
    {
      id: {
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
      supplement: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
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
