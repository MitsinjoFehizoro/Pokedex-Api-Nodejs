const { regexName, regexHp, regexCp, regexImage } = require("../tools/regex")
const { typesValid } = require('../tools/pokemon-service')

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                notEmpty: "Le nom du pokémon est obligatoire.",
                notNull: "Le nom du pokémon est obligatoire.",
                isCorrectFormat(value) {
                    if (!regexName.test(value))
                        throw new Error("Le nom d'un pokémon doit entre 3 à 5 sans caractères spéciaux.")
                }
            }
        },
        hp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexHp.test(value))
                        throw new Error("Le point de vie est entre 0 à 999.")
                }
            }
        },
        cp: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexCp.test(value))
                        throw new Error("Le dégât est entre 0 à 999.")
                }
            }
        },
        picture: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexImage.test(value))
                        throw new Error("Le lien de l'image est de la forme : https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png")
                }
            }
        },
        types: {
            type: DataTypes.STRING,
            allowNull: false,
            get() {
                return types.getDataValue("types").split(",")
            },
            set(types) {
                this.setDataValue("types", types.join())
            },
            validate: {
                isCorrectFormat(value) {
                    if (value) {
                        value.split(",").map(val => {
                            if (!typesValid.includes(val))
                                throw new Error(`Les types d'un pokémon doit appartenir à la liste suivante : ${typesValid}`)
                        })
                    } else {
                        throw new Error('Le pokémon doit avoir au moins un type.')
                    }
                }
            }
        }
    })
}