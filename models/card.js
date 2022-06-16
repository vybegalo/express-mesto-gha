const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 30,
    },
    link: {
      type: String,
      required: true,
    },
    owner: {
      required: true,
    },
    likes: {
    },

    createdAt: {
    },
  });

module.exports = mongoose.model('card', cardSchema);