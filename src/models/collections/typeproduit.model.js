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
    },
    {
      timestamps: false,
    }
  );

  return TypeProduit;
};
