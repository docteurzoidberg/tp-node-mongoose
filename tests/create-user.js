var mongoose =          require('mongoose');
var UserSchema =        require("../models/user");

// ouverture db mongo "test" en local
mongoose.connect("mongodb://localhost/test");

//Creation nouvel objet user
var newUser = new UserSchema();
newUser.email = "admin@gmail.com";
newUser.password = newUser.generatePassword();
newUser.apikey = newUser.generateApiKey();
newUser.roles = ["ADMIN", "USER", "DBADMIN"];

//Sauvegarde en base
newUser.save(function(err, saveduser) {

    if(err) {
        console.error("Erreur lors de l'insertion: ");
        console.error(err);
    }
    else {
        console.log("Insertion OK :)");
    }

    //Closing
    console.log("Finished, closing bdd");
    mongoose.connection.close();
})


