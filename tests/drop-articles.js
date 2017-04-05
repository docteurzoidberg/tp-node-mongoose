var mongoose =      require("mongoose");

//Db connect
mongoose.connect("mongodb://localhost/test");

var ArticleSchema =  require("../models/article");

//Db cleanup
ArticleSchema.collection.remove();

//Closing
console.log("Finished, closing bdd");
mongoose.connection.close();
