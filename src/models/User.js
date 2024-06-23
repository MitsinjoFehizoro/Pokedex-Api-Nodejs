const { regexName, regexPassword } = require("../tools/regex")

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        pseudo: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: {
                msg: "Ce pseudo est déja utilisé."
            },
            validate: {
                isCorrectFormat(value) {
                    if (!regexName.test(value))
                        throw new Error("Le pseudo doit être entre 3 à 15 sans caractères spéciaux.")
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isCorrectFormat(value) {
                    if (!regexPassword.test(value))
                        throw new Error("Le mot de passe doit être au moins 4 caractères.")
                }
            }
        }
    })
}