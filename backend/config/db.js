const mongoose = require("mongoose");
require("dotenv").config({ path: "./config/.env" });
// importer monggose pour ce connecter a ma base de donné
mongoose
  .connect(
    "mongodb+srv://" +
      process.env.DB_USER_PASS +
      "@cluster0.xzrzc.mongodb.net/projetopenclassromm?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

// exportation
module.exports = mongoose;
