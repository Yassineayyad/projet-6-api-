// import des dependencies
const express = require("express");
const morgan = require('morgan')
require("dotenv").config({ path: "./config/.env" });

const mongoose = require("./config/db")
const user = require("./models/user");
const userRoutes = require('./routes/user')

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
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// route d'autentification
https: app.use("/api/auth", userRoutes);

// exportation de app.js pour l'utiliser sur tous nos fichier
module.exports = app;
