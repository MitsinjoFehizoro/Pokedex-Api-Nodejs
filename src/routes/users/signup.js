const { User } = require("../../db/sequelize")
const bcrypt = require('bcrypt')

module.exports = (app) => {
    app.post('/signup', (req, res) => {
        bcrypt.hash(req.body.password, 10)
            .then(password => {
                User.create(
                    {
                        pseudo: req.body.pseudo,
                        password: password
                    }
                )
                    .then(_ => {
                        const message = `Création avec succès d'un nouveau utilisateur.`
                        res.json({ message })
                    })
                    .catch(error => {
                        const message = "Erreur de la création d'un nouvau utilisateur. Réessayer dans quelques instants."
                        res.status(500).json({ message })
                    })
            })
            .catch(error => {
                res.status(500).json({ message: error.message })
            })
    })
}