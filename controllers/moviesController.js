var movies=require('./movieData');
var dbServices = require('../service/dbService');
exports.getAllMovies = function(req,res,next){
    

    return res.json(movies);
  }
