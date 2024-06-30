const jwt = require("jsonwebtoken")
const privateKey = require("./private-key")

module.exports = (req, res, next) => {
    const authorizationHeader = req.headers.authorization
    if (authorizationHeader) {
        const token = authorizationHeader.split(" ")[1]
        jwt.verify(
            token,
            privateKey,
            (error) => {
                if (error) {
                    const message = "L'utilisateur n'est pas authorisé à accéder à cette ressoure."
                    res.status(401).json({ message })
                } else
                    next()
            }
        )
    } else {
        const message = "Vous n'avez pas un jéton d'authentification!"
        res.status(401).json({ message })
    }
}