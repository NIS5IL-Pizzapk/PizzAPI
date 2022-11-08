//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Addr = sequelize.define(
    "adresse-livraison",
    {
      addrId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      adresse: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "anon",
      },
      commentaires: {
        type: Sequelize.STRING,
      },
    },
    {
      timestamps: false,
    }
  );

  return Addr;
};
