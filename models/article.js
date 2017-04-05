var mongoose = require("mongoose");
var Schema  = mongoose.Schema;

var UserSchema = require("./user");

var ArticleSchema =  new Schema({    
    user:			{ type: Schema.Types.ObjectId , ref: 'User'},
    name:			{ type: String },
    desc:           { type: String },    
    path:           { type: String },
    ts:				{ type: Date, default: Date.now },
});

module.exports = mongoose.model('Article', ArticleSchema);
