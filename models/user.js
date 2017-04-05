var crypto = require("crypto");

var mongoose = require("mongoose");


/*   Model    */
var UserSchema = mongoose.Schema({
    email           : String,
    password        : String,
    apikey          : String,
    roles           : [String]
});


/* User Methods */

UserSchema.methods.generatePassword = function() {
    //TODO: true password generation
    return crypto.randomBytes(32);
};

UserSchema.methods.generateApiKey = function() {
     //TODO: true hash generation
    return crypto.randomBytes(32);
};

// Return "TRUE" si le user a un role "ADMIN" dans son tableau de roles
UserSchema.methods.isAdmin = function() {

    if(!this.roles)
        return false;
    
    for(var k in this.roles) {
        if(!this.roles[k])
            continue;
        if(this.roles[k]==="ADMIN")
            return true;
    }

    return false;
};

UserSchema.methods.validPassword = function(password) {
    //TODO: check user password hash against password + salt
};


module.exports = mongoose.model('User', UserSchema);