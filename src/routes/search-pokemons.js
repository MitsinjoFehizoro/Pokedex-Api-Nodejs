const { where, Op } = require("sequelize")
const { Pokemon } = require("../db/sequelize")

module.exports = (app) => {
    app.get('/pokemon/search/:name', (req, res) => {
        Pokemon.findAll({
            where: {
                name: {
                    [Op.like]: `%${req.params.name}%`
                }
            }
        })
            .then(pokemons => {
                if (pokemons.length !== 0) {
                    const message = `Récupération des ${pokemons.length} pokémons convenables à votre recherche.`
                    const data = pokemons.map(pokemon => ({
                        id: pokemon.id,
                        name: pokemon.name,
                        hp: pokemon.hp,
                        cp: pokemon.cp,
                        picture: pokemon.picture,
                        types: pokemon.types
                    }))
                    res.json({ message: message, data: data })
                } else
                    res.json({ message: "Aucun pokémon convenable à votre recherche." })
            })
            .catch(error => {
                res.status(500).json({ message: "Erreur interne du serveur. Réessayer dans quelques instants." })
            })
    })
}