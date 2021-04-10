let mongoose = require("mongoose");

let transactionSchema = ({
    transactionID : String,
    amount : Number,
    dated : String,
    bankDetails:{
        bankName :String,
        userName : String
    }
})

module.exports = mongoose.model("transaction", transactionSchema);