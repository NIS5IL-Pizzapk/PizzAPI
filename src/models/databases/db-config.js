const Sequelize = require("sequelize");
require("dotenv").config();
const {
  MYSQL_ADRESS,
  MYSQL_USERNAME,
  MYSQL_PORT,
  MYSQL_PASSWORD,
  MYSQL_DATABASE,
} = process.env;
const sequelize = new Sequelize(
  MYSQL_DATABASE,
  MYSQL_USERNAME,
  MYSQL_PASSWORD,
  {
    host: MYSQL_ADRESS,
    port: MYSQL_PORT,
    dialect: "mysql",
    logging: false, //pour ne pas afficher les requêtes dans la console
    pool: {
      max: 10,
      min: 0,
      idle: 10000,
    },
  }
);

if (sequelize.authenticate()) {
  console.log("Connection has been established successfully.");
} else {
  console.log("Unable to connect to the database:");
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.users = require("../collections/users.model")(sequelize, Sequelize);
db.adresseLivraison = require("../collections/adresseLivraison.model")(
  sequelize,
  Sequelize
);

//Définition des relations entre les tables
db.adresseLivraison.belongsTo(db.users);
db.users.hasMany(db.adresseLivraison);

module.exports = db;
