const { Pokemon } = require("../db/sequelize")

module.exports = (app) => {
    app.get('/pokemon/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                const message = "Récupération avec succès d'un pokémon."
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
                const message = "Erreur  de la récupération d'un pokémon. Réessayer dans quelques instants."
                res.json({ message: message })
            })
    })
}