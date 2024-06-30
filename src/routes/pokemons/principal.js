const auth = require('../../auth/auth')
module.exports = (app) => {
  app.get("/",(req, res) => {
    const message = "Bienvenue dans mon api-rest de gestion de pokémons.";
    res.json({ message });
  });
};
