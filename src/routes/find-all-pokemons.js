const { Pokemon } = require("../db/sequelize")

module.exports = (app) => {
    app.get('/pokemons', (req, res) => {
        Pokemon.findAll()
            .then(pokemons => {
                const message = "Récupération avec succès de tous les pokémons."
                const data = pokemons.map(pokemon => (
                    {
                        id: pokemon.id,
                        name: pokemon.name,
                        hp: pokemon.hp,
                        cp: pokemon.cp,
                        picture: pokemon.picture,
                        types: pokemon.types
                    }
                ))
                res.json({ message: message, data: data })
            })
            .catch(error => {
                const message = "Erreur  de la récupération de tous les pokémons. Réessayer dans quelques instants."
                res.json({ message: message })
            })
    })
}