var mongo = require("mongoose");
var db = 
mongo.connect("mongodb://Admin1:admin1@ds115411.mlab.com:15411/movieticket", function(err, response){
   if(err){ console.log('Failed to connect to ' + db); }
   else{ console.log('Connected to ' + db, ' + ', response); }
});


module.exports =db;

// reactcrud is database name
// 192.168.1.71:27017 is your mongo server name
