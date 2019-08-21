const mongoose = require('mongoose');


const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});


module.exports = mongoose.model('Movie', movieSchema);
