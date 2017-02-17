const mongoose = require('mongoose'),
      Schema = mongoose.Schema;

const MoviesSchema = new Schema({
  // Dont have to write "id" because MongoDB inserts this by itself as "_id"
  movieID: String,
  name: String,
  genre: Array,
  type: String
});

// export the Schema so that it can be used by other modules/codes
// .model : compiles the Schema to a Collection with the given name in the database
module.exports = mongoose.model('Movie', MoviesSchema);
