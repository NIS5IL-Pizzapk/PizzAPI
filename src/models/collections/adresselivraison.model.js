//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Adr = sequelize.define(
    "adresse-livraison",
    {
      adrId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "anon",
      },
      codePostal: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      ville: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      instructions: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      displayed: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );

  return Adr;
};
