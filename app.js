const express = require("express");
const bodyParser = require("body-parser")

const app = express()

app.use(bodyParser.json())

require('./src/routes/principal')(app)

app.use(({ res }) => {
    const message = "Erreur 404 , ressource non trouvée."
    res.status(404).json({ message })
})

const port = 3000
app.listen(port, () => {
    console.log(`Notre application est lancée sur le port ${port}`);
})

