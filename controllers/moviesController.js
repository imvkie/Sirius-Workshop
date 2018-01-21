var movies=require('./movieData');
var dbService = require('../service/dbService');

exports.getAllMovies = function(req,res,next){
    var db = dbService.database;
    var moviesCollection = db.collection("movies");
    moviesCollection.find().toArray().then(function(result){
      var outputJSON = {
        "isSucess" : true,
        "data" : result
      }
        return res.json(outputJSON);
    });
  }
