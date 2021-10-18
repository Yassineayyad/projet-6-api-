const mongoose = require("mongoose");


const sauceShema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },

    name: {
      type: String,
      required: true,
    },

    manufacturer: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
    },

    mainPepper: {
      type: String,
      required: true,
    },

    imageUrl: {
      type: String,
      required: true,
    },

    heat: {
      type: Number,
      required: true,
    },

    likes: {
      type: Number,
      default: 0,
    },

    dislikes: {
      type: Number,
      default: 0,
    },

    usersLiked: {
      type: Array,

    },

    usersDisliked: {
      type: Array,
      
    },
  },
);

const ModelsSauce = mongoose.model("sauce", sauceShema);
module.exports = ModelsSauce;