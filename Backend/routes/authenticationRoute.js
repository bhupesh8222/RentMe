//login logout register
let express = require("express");
let router = express.Router();
let userModel = require("../db/user");
let postModel = require('../db/post');
let transactionModel = require("../db/transaction");
let passport = require("passport");

/*LANDING PAGE
router.get('/landing', (req, res)=> {
    res.send("Landing Page!");
})

//AUTH ROUTES
router.get("/signup", (req, res) => {
    res.render("signup");
});*/

router.post("/signup", async (req, res)=> {

    let newUser = new userModel({ username: req.body.username, email: req.body.gmail, AadharNo:req.body.AadharNo });
    try{
        let userDetails= await userModel.register(newUser, req.body.password);
        await passport.authenticate("local");
        res.send(userDetails);
    }
    catch(error)
    {
        console.log(error);
        res.send("SERVER_ERROR");
    }


})


router.post("/login", passport.authenticate("local", {
    successRedirect: "/home",
    failureRedirect: "/login"
}), (req, res)=> {
    res.send(req.user);
});


//LOGOUT ROUTE

router.get("/logout", (req, res)=> {
    req.logout();
});



module.exports = router;