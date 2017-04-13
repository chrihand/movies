

const ourMovies = require("../models/ourMovies"); //import the exported Model

exports.addMovie = function(req, res, next) {
 const addMovie = req.body; // extract from the request body the key-value pairs
 // Check that all needed information is present and valid:
 //console.log("Hit")
 //console.log(addMovie.name);

 if(addMovie.name == '' || addMovie.genre == '' || addMovie.type == ''){
   return res.status(422).send({ error: 'Did you spessify name, genre and type?' });
 }
 // If validation is passed, create a new postit:
 const movie = new ourMovies({
   movieID: addMovie.movieID,
   type: addMovie.type,
   movieInfo: addMovie.movieInfo
 });
 // Try and save to database
 movie.save(function(err, addMovie){
   if(err) {
     return res.status(400).send({ message: 'something went wrong. Could not add new movie: ' + err})
   }
   // If no error, and saving a new postit was success. send this response
   return res.status(200).send(addMovie + "\nSuccessfully saved");
 });
};


exports.getAllMovies = function(req, res, next) {
  var query = "";

  ourMovies.find(query, function(err, documents) {
    if (err) {
      return res.status(422).send({ error: "Something wen worng trying to get all movies" + err});
    }

    return res.status(200).send(documents);
  });
};


exports.findMovie = function(req, res, next) {
  var name = req.params.name;

  ourMovies.find({name: new RegExp(name, 'i')}, function(err, doc) {
    if (err) {
      return res.status(422).send({error: "Something went wrong, Error: " + err});
    }

    //console.log("doc : " + doc);
    if (doc == null) {
      return res.status(200).send({message: "Could not find a movie with that title."});
    }

    return res.status(200).send(doc);
  });
};
