module.exports = (app) => {
    app.get("/", (req, res) => {
      const message = "Bienvenue";
      res.json({ message });
    });
  };
  