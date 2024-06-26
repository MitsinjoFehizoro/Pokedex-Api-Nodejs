const { Pokemon } = require("../../db/sequelize")

module.exports = (app) => {
    app.get('/pokemons/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                if (pokemon) {
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
                } else
                    res.status(404).json({ message: "Pokémon non trouvée." })
            })
            .catch(error => {
                const message = "Erreur  de la récupération d'un pokémon. Réessayer dans quelques instants."
                res.json({ message: message })
            })
    })
}