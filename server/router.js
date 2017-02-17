const express = require('express');
const router = express.Router(); // main router, that will contain all the different ROUTERs


// Import all the controllers, to control what happens on a certain request
const movieController = require('./controllers/movieController');

// Define the different route groupes:
const apiRoutes = express.Router();

apiRoutes.post('/movie/add', movieController.addMovie);

apiRoutes.get('/movie/search/:name', movieController.findMovie);
apiRoutes.get('/movie/all', movieController.getAllMovies);

// Add all the different route groups to the main router
router.use("/api", apiRoutes);

// Export the main router to the server
module.exports = router;
