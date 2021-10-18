// import des dependencies
const express = require("express");
const morgan = require('morgan')
const path = require("path");

require("dotenv").config({ path: "./config/.env" });

const mongoose = require("./config/db")
const user = require("./models/user");
const userRoutes = require('./routes/user')
const sauceRoutes =require('./routes/sauce')
// créé l'application express
const app = express();


const bodyParser = require("body-parser");

// log des req et res 
app.use(morgan("dev"));



// gerer les acces a notre api
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

// transformer le body en json (objet javascript) utilisable grace a body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route d'autentification
app.use("/api/auth", userRoutes);
app.use("/api/sauces", sauceRoutes);
app.use("/images", express.static(path.join(__dirname, "images")));


// exportation de app.js pour l'utiliser sur tous nos fichier
module.exports = app;
