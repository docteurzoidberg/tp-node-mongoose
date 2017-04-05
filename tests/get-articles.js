var mongoose =          require('mongoose');
var ArticleSchema =     require("../models/article");

// ouverture db mongo "test" en local
mongoose.connect("mongodb://localhost/test");

ArticleSchema.find({/*tous*/}).populate('user' /*schema user*/).exec(function(err, articles) {

    if(err) {
        console.error("Erreur lors de la requete: ");
        console.error(err);
    }

    if(articles) {
        //Affiche tous les users trouvés:
        articles.forEach(function(article) {
            console.log("---------- ARTICLE --------------");
            console.log("Nom de l'article: " + article.name);
            console.log("Description de l'article: " + article.name);
            console.log("Email de l'auteur: " + article.user.email);    //article.user.* => grace a "populate('user').exec" sur le resultat de find
        });
    }

    //Closing
    console.log("Finished, closing bdd");
    mongoose.connection.close();
});


