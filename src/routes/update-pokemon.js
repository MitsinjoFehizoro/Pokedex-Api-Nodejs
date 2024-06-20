const { ValidationError } = require("sequelize")
const { Pokemon } = require("../db/sequelize")

module.exports = (app) => {
    app.put('/pokemon/:id', (req, res) => {
        Pokemon.findByPk(req.params.id)
            .then(pokemon => {
                if (pokemon) {
                    Pokemon.update(
                        {
                            name: req.body.name,
                            hp: req.body.hp,
                            cp: req.body.cp,
                            picture: req.body.picture,
                            types: req.body.types
                        },
                        {
                            where: { id: req.params.id }
                        }
                    )
                        .then((_) => {
                            Pokemon.findByPk(pokemon.id)
                                .then(pokemon => {
                                    const message = "Modification avec succès d'un pokémon."
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
                        })
                        .catch(error => {
                            if (error instanceof ValidationError)
                                res.status(400).json({ message: error.message })
                            else
                                res.status(500).json({ message: "Erreur de la modification d'un pokémon. Réessayer dans quelques instants." })

                        })
                } else
                    res.status(404).json({ message: "Modification d'un pokémon non trouvée." })
            })
            .catch(error => {
                res.status(500).json({ message: "Erreur de la modification d'un pokémon. Réessayer dans quelques instants." })
            })
    })

}