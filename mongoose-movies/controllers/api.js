var Movie = require('../models/movie');

module.exports = {
    apiIndex,

}

function apiIndex(req, res) {
    Movie.find({}, function(err, movies) {
      res.json(movies);
    });
  }
