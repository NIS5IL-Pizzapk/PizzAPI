//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Allergene = sequelize.define(
    "allergene",
    {
      AllergeneId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
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

  return Allergene;
};
