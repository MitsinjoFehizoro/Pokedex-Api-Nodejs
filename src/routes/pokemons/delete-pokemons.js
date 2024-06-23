const { Pokemon } = require("../../db/sequelize")

module.exports = (app) => {
    app.delete('/pokemon/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                if (pokemon) {
                    Pokemon.destroy({ where: { id: pokemon.id } })
                        .then(_ => {
                            const message = "Supression avec succès du pokémon."
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
                            res.status(500).json({ message: "Erreur de la supression d'un pokémon. Réessayer dans quelques instants." })
                        })
                } else
                    res.status(404).json({ message: "Suppression d'un pokémon non trouvée." })
            })
            .catch(error => {
                res.status(500).json({ message: "Erreur de la supression d'un pokémon. Réessayer dans quelques instants." })
            })
    })
}