const { Sequelize, DataTypes } = require("sequelize");
const { name } = require("body-parser");

const PokemonModel = require('../models/Pokemon');
const POKEMONS = require('../db/constant/POKEMONS.JS');

const sequelize = new Sequelize('pokedex', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: false
})

sequelize
    .authenticate()
    .then((_) => {
        console.log('Réussite de la connexion à la bdd.');
    })
    .catch((error) => {
        console.log(`Echec de la connexion à la bdd : ${error}`);
    })

//Instancification model
const Pokemon = PokemonModel(sequelize, DataTypes)

//initilisation dans la bdd
const initBdd = () => {
    sequelize
        .sync({ force: true })
        .then((_) => {
            for (let i = 0; i < 12; i++) {
                Pokemon.create({
                    name: POKEMONS[i].name,
                    hp: POKEMONS[i].hp,
                    cp: POKEMONS[i].cp,
                    picture: POKEMONS[i].picture,
                    types: POKEMONS[i].types
                })
            }
            console.log("Réussite de l'ajout dans la bdd.")
        })
        .catch(error => {
            console.error(`Echec de l'ajout dans la bdd ${error}`)
        })
}

module.exports = {
    Pokemon,
    initBdd
}