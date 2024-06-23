const express = require("express");
const bodyParser = require("body-parser");
const sequelize = require('./src/db/sequelize')
const app = express()

app.use(bodyParser.json())

sequelize.initBdd()

//routes
require('./src/routes/pokemons/principal')(app)
require('./src/routes/pokemons/create-pokemon')(app)
require('./src/routes/pokemons/find-all-pokemons')(app)
require('./src/routes/pokemons/find-pokemon-by-pk')(app)
require('./src/routes/pokemons/update-pokemon')(app)
require('./src/routes/pokemons/delete-pokemons')(app)
require('./src/routes/pokemons/search-pokemons')(app)
require('./src/routes/users/signup')(app)

app.use(({ res }) => {
    const message = "Erreur 404 , ressource non trouvée."
    res.status(404).json({ message })
})

const port = 3000
app.listen(port, () => {
    console.log(`Notre application est lancée sur le port ${port}`);
})

