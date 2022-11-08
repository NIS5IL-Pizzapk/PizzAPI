//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
    const PlatComm = sequelize.define(
        "plat-commande",
        {
            platCommId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            prix: {
                type: Sequelize.FLOAT,
                allowNull: false
            },
            quantite: {
                type: Sequelize.INTEGER,
                defaultValue: 1,
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

    return PlatComm;
};