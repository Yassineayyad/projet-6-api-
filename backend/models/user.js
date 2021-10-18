// importation des dependencies
const mongoose = require("mongoose");
const { isEmail } = require("validator");
const uniqueValidator = require('mongoose-unique-validator')

const userSchema =  mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
/*       lowercase: true,
      trimp: true, */
     /*  validate: [isEmail], */
    },
    password: {
      type: String,
      required: true,
    },
  },
  /* {
    timestamps: true,
  } */
);
//Securité pour ne pas enregistrer deux fois le meme mail dans la bdd
userSchema.plugin(uniqueValidator);
const Utilisateur = mongoose.model("User", userSchema);
module.exports = Utilisateur;
