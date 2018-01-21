var MongoClient = require('mongodb').MongoClient

exports.createConnetion = function(){
  MongoClient.connect("mongodb://projector:projector@ds117931.mlab.com:17931/projector").then(function(client){
    console.log("Connected to MongoDB");
    exports.database = client.db("projector");
  });
}
