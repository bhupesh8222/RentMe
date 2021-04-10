let express = require("express");
let bodyparser = require('body-parser');
var app = express();
let mongoose = require("mongoose");
app.use(bodyparser.urlencoded({ extended: true }));
let userModel = require("./db/user");
let postModel = require('./db/post');
let transactionModel = require("./db/transaction");
let cookieParser = require("cookie-parser");
app.use(cookieParser);
var methodOverride = require("method-override");
app.use(methodOverride("_method"));



//---------------AUTHENTICATION PART---------------
var passport = require("passport");
var expressSession = require("express-session");
var passportLocal = require("passport-local");
var passportLocalMongoose = require("passport-local-mongoose");
const { Router } = require("express");

//CONFIGURE PASSPORT
app.use(expressSession({
    secret: "Secret Key",
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());


//user.authenticate comes with passport-local-mongoose, here we are using local strategy for userModel
passport.use(new passportLocal(userModel.authenticate()));
passport.serializeUser(userModel.serializeUser());
passport.deserializeUser(userModel.deserializeUser());
//--------------PASSPORT CONFIGURED---------------------------------------



//----------------------ADDING ROUTES----------------------
//let authentication = require(__dirname + "/routes/authenticationRoute.js");
//let postProduct = require(__dirname + "/routes/postProductRoute.js");
//let transaction = require(__dirname + "/routes/transactionRoute.js");


//app.use(authentication);
//app.use( postProduct); 
//app.use(authroutes);

//-----------------------------------------------------------------------



const url = "mongodb+srv://bhupesh:bhupesh@cluster0.xxjsn.mongodb.net/myDatabase?retryWrites=true&w=majority";
mongoose.set('useCreateIndex', true);

mongoose.connect(url, { useUnifiedTopology: true, useNewUrlParser: true })
    .then((res) => {
        console.log("connected to Database!!");
    })
    .catch((err) => {
        console.log("Encountered error...");
        console.log("error : " + err);
    });


//------------------CHECK DATABASE -----------
//-------------------CONNECTED-------------------

/*userModel.create({
    username:"Bhupesh",
    email:"sasa",
    password: 123,
    AadharNo:789
},(error, user)=>{
    postModel.create({
        name: "ring",
        description:"tring",
        imgUrl :"Strinag",
        AddedOndate : "sa",
        
        postCreator : user
    })
});*/

const port =  1000;

app.get("/", (req,res)=>{
    res.send("HELLO");
})

app.listen(port, ()=> {
    console.log("SERVER HAS STARTED!!");
});