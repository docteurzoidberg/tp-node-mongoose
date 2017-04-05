var mongoose =          require('mongoose');
var UserSchema =        require("../models/user");

// ouverture db mongo "test" en local
mongoose.connect("mongodb://localhost/test");

UserSchema.find({"email": "admin@gmail.com"}, function(err, docs) {

    if(err) {
        console.error("Erreur lors de la requete: ");
        console.error(err);
    }

    if(docs) {
        //Affiche tous les users trouvés:
        docs.forEach(function(doc) {
            console.log("Email: " + doc.email);
        });
    }

    //Closing
    console.log("Finished, closing bdd");
    mongoose.connection.close();
});


