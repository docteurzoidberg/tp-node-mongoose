var mongoose =      require("mongoose");

//Db connect
mongoose.connect("mongodb://localhost/test");

var UserSchema =          require("../models/user");

//Db cleanup
UserSchema.collection.remove();

//Closing
console.log("Finished, closing bdd");
mongoose.connection.close();
