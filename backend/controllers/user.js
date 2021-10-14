// importation du model de la bdd user.js
const User = require("../models/user");
const bcrypt = require("bcrypt");
const cryptojs = require("crypto-js");
require("dotenv").config({ path: "./config/.env" });
// exporter la fonction signup qui permettra de créé un compte
exports.signup = (req, res, next) => {
  //chiffrer l'email avant de l'envoyer a la base de données
  const emailCrypte = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS_KEY_EMAIL}`)
    .toString();

  bcrypt
    .hash(req.body.password, 10) // le 10 signifie le nombre de fois que l'algorithme sera executé
    .then((hash) => {
      const user = new User({
        email: emailCrypte,
        password: hash,
      });
      console.log("---->user");
      console.log(user);
      user
        .save()
        .then(() =>
          res.status(201).json({ message: "compte crée avec succes" })
        )
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};

exports.login = (req, res, next) => {
  //chiffrer l'email avant de l'envoyer a la base de données
  const emailCrypte = cryptojs
    .HmacSHA256(req.body.email, `${process.env.CRYPTOJS_KEY_EMAIL}`)
    .toString();

  User.findOne({ email: emailCrypte })
    .then((user) => {
      if (!user) {
        return res
          .status(401)
          .json({ err: "l'Utilisateurn'est pas enregistrer !" });
      }
      bcrypt
        .compare(req.body.password, user.password)
        .then((val) => {
          if (!val) {
            return res.status(401).json({ err: "mot de passe incorrect !" });
          }
          res.status(200).json({
            userId: user._id,
            token: "TOKEN",
          });
        })
        .catch((err) => res.status(500).json({ err }));
    })
    .catch((err) => res.status(500).json({ err }));
};
