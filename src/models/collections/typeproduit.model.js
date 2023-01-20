//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const TypeProduit = sequelize.define(
    "type_de_produit",
    {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nom: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      menuImgPath: {
        type: Sequelize.STRING,
      },
      bloqueCreneau: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return TypeProduit;
};
