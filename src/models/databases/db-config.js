const Sequelize = require("sequelize");
//const { combineTableNames } = require("sequelize/types/utils");
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
db.allergenes = require("../collections/allergene.model")(sequelize, Sequelize);
db.commande = require("../collections/commande.model")(sequelize, Sequelize);
db.platcommande = require("../collections/platcommande.model")(
  sequelize,
  Sequelize
);
db.produit = require("../collections/produit.model")(sequelize, Sequelize);

db.tag = require("../collections/tag.model")(sequelize, Sequelize);

db.reservation = require("../collections/reservation.model")(
  sequelize,
  Sequelize
);
db.restaurant = require("../collections/restaurant.model")(
  sequelize,
  Sequelize
);
db.typeProduit = require("../collections/typeproduit.model")(
  sequelize,
  Sequelize
);
db.creneau = require("../collections/creneau.model")(sequelize, Sequelize);

//Définition des relations entre les tables
db.adresseLivraison.belongsTo(db.users);
db.users.hasMany(db.adresseLivraison);

db.commande.belongsTo(db.adresseLivraison);
db.adresseLivraison.hasMany(db.commande);

db.platcommande.belongsTo(db.commande);
db.commande.hasMany(db.platcommande);

db.platcommande.belongsToMany(db.produit, {
  through: "produit_plat_commande",
  timestamps: false,
});
db.produit.belongsToMany(db.platcommande, {
  through: "produit_plat_commande",
  timestamps: false,
});

db.produit.belongsToMany(db.tag, { through: "produit_tag", timestamps: false });
db.tag.belongsToMany(db.produit, { through: "produit_tag", timestamps: false });

db.produit.belongsToMany(db.allergenes, {
  through: "produit_allergene",
  timestamps: false,
});
db.allergenes.belongsToMany(db.produit, {
  through: "produit_allergene",
  timestamps: false,
});

db.produit.belongsTo(db.typeProduit);
db.typeProduit.hasMany(db.produit);

db.produit.belongsTo(db.restaurant);
db.restaurant.hasMany(db.produit);

db.reservation.belongsTo(db.users);
db.users.hasMany(db.reservation);

db.reservation.belongsTo(db.restaurant);
db.restaurant.hasMany(db.reservation);

db.creneau.belongsTo(db.restaurant);
db.restaurant.hasMany(db.creneau);

db.creneau.hasMany(db.platcommande);
db.platcommande.belongsTo(db.creneau);

module.exports = db;
