const { compare } = require("bcrypt")
const { User } = require("../../db/sequelize")
const jwt = require("jsonwebtoken")
const privateKey = require("../../auth/private-key")

module.exports = (app) => {
    app.post('/login', (req, res) => {
        User.findOne({ where: { pseudo: req.body.pseudo } })
            .then(user => {
                if (user) {
                    compare(req.body.password, user.password).then(isPassword => {
                        if (isPassword) {
                            const token = jwt.sign(
                                { userId: user.id },
                                privateKey,
                                { expiresIn: '24h' }
                            )
                            const message = "Utilisateur connecté."
                            res.json({ message: message, data: user, token: token })
                        } else {
                            const message = "Mot de passe incorrect."
                            res.status(401).json({ message })
                        }
                    })
                } else {
                    const message = `L'utilisateur ${req.body.pseudo} n'existe pas.`
                    res.status(404).json({ message })
                }
            })
            .catch(error => {
                const message = "Erreur de la connexion utilisateur. Réessayer dans quelques instants."
                res.status(500).json({ message })
            })
    })
}