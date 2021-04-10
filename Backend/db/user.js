let mongoose = require("mongoose");

var passportLocalMongoose = require("passport-local-mongoose");

var userSchema = new mongoose.Schema({
    username: {
        type:String,
        unique:1
    },
    email: {
        type:String,
        trim:true,
        unique: 1 
    },
    password: String,
    AadharNo: {
        type:Number,
        unique:1
    },

    transactions: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "transaction"
    }
    //isAdmin: { type: Boolean, default: false }
});

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("user", userSchema);