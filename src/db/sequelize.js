const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('pokedex', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: 'false'
})

sequelize
    .authenticate()
    .then((_) => {
        console.log('Réussite de la connexion à la bdd.');
    })
    .catch((_) => {
        console.log('Echec de la connexion à la bdd.');
    })
    