let mongoose = require("mongoose");

var postSchema = new mongoose.Schema({
    name: String,
    description:String,
    imgUrl :String,
    AddedOndate : String,
    
    postCreator :{
        type: mongoose.Schema.Types.ObjectId,
        //The refrence name is the collection name to where we are associating.
        ref: "user"
    }
});


module.exports = mongoose.model("post", postSchema);