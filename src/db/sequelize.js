const { Sequelize, DataTypes } = require("sequelize");
const { name } = require("body-parser");
require('dotenv').config()

const PokemonModel = require('../models/Pokemon');
const UserModel = require('../models/User')
const POKEMONS = require('../db/constant/POKEMONS.JS');

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
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
const User = UserModel(sequelize, DataTypes)

//initilisation dans la bdd
const initBdd = () => {
    sequelize
        .sync({ alter: true })
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
    User,
    initBdd
}