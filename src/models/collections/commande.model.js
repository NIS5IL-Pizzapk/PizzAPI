//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
    const Comm = sequelize.define(
        "commande",
        {
            commId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            prixTotal: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            dateHeureComm: {
                type: Sequelize.DATE,
                allowNull: false
            },
            dateHeureLivr: {
                type: Sequelize.DATE,
                allowNull: false
            },
            commentaires: {
                type: Sequelize.STRING
            }
        },
        {
            timestamps: false,
        }
    );

    return Comm;
};