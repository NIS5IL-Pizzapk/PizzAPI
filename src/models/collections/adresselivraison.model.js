//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Adr = sequelize.define(
    "adresse-livraison",
    {
      id: {
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
        defaultValue: true,
      },
    },
    {
      timestamps: false,
    }
  );

  return Adr;
};
