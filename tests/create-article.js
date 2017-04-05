var mongoose =          require('mongoose');

var UserSchema =        require("../models/user");
var ArticleSchema =     require("../models/article");

// ouverture db mongo "test" en local
mongoose.connect("mongodb://localhost/test");

//Recuperation du premier user "admin@gmail.com" en base comme auteur de l'article
UserSchema.findOne({"email": "admin@gmail.com"}, function(err, user) {
    
    //Erreur lors de la requete ou user non trouvé
    if(err || !user) {
        mongoose.connection.close();
        console.error(err ? "Database error: " + err.message  : "user admin@gmail not found");
        return;
    }

    //On a l'user, on va creer un article
    var newArticle = new ArticleSchema();
    newArticle.user = user; //reference au schema user
    newArticle.name = "NomArticle";
    newArticle.desc = "Description de l'article.";
    newArticle.path = "/chemin/vers/fichier";
    //le champ "newArticle.ts" est rempli automatiquement à la sauvegarde car valeur par defaut dans le schema

    //Sauvegarde en base
    newArticle.save(function(err, savedarticle) {

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
});







