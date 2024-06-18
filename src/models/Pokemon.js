const { regexName, regexHp, regexCp, regexImage } = require("../tools/regex")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Pokemon', {
        id: {
            types: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            types: DataTypes.STRING,
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
            types: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexHp.test(value))
                        throw new Error("Le point de vie est entre 0 à 999.")
                }
            }
        },
        cp: {
            types: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexCp.test(value))
                        throw new Error("Le dégât est entre 0 à 999.")
                }
            }
        },
        picture: {
            types: DataTypes.STRING,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexImage.test(value))
                        throw new Error("Le lien de l'image est de la forme : https://assets.pokemon.com/assets/cms2/img/pokedex/detail/xxx.png")
                }
            }
        }
    })
}