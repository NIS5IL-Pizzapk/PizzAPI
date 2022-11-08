//=======================================
// MODEL
//=======================================

module.exports = (sequelize, Sequelize) => {
    const Supp = sequelize.define(
        "supplement",
        {
            supplementId: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
            },
            typePlat: {
                type: Sequelize.STRING,
                allowNull: false
            },
            nom: {
                type: Sequelize.STRING,
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