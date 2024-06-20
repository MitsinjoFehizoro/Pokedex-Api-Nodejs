const { ValidationError } = require("sequelize")
const { Pokemon } = require("../db/sequelize")

module.exports = (app) => {
    app.post('/pokemon', (req, res) => {
        Pokemon.create({
            name: req.body.name,
            hp: req.body.hp,
            cp: req.body.cp,
            picture: req.body.picture,
            types: req.body.types
        }).then(pokemon => {
            const message = "Ajout avec succès d'un nouveau pokémon."
            const data = {
                id: pokemon.id,
                name: pokemon.name,
                hp: pokemon.hp,
                cp: pokemon.cp,
                picture: pokemon.picture,
                types: pokemon.types
            }
            res.json({ message: message, data: data })
        })
            .catch(error => {
                if (error instanceof ValidationError)
                    res.status(400).json({ message: error.message })
                else
                    res.status(500).json({ message: "Erreur de l'ajout d'un nouveau pokémon. Réessayer dans quelques instants." })
            })
    })
}