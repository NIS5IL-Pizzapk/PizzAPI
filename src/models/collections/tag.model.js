//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
  const Tag = sequelize.define(
    "tag",
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
    },
    {
      timestamps: false,
    }
  );

  return Tag;
};
