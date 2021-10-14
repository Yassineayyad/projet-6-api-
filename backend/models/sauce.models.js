const mongoose = require("mongoose");


const sauceShema = new mongoose.Schema({
  userId: {
    type: [String],
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
    type: Number
  },

  likes: {
    type: Number
  },

  dislikes: {
    type:Number
  },

  userliked:{
      type:[String]
  },

  usersDisliked:{
      type:[String]
  }
},
{
    timestamps: true,
});

const ModelsSauce = mongoose.model("sauce", sauceShema);
module.exports = ModelsSauce;