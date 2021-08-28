var express  = require("express"),
    router   = express.Router(),
    passport = require("passport"),
    User     = require("../models/user");
    
//ROUTE ROUTE
router.get("/",function(req,res){
    res.render("landing");
});
    
//AUTH ROUTS

//SHOW REGISTER FORM
router.get("/register",function(req,res){
    res.render("register");
});

//HANDLE SIGN-UP LOGIC
router.post("/register",function(req,res){
    var newUser=new User({username:req.body.username});
    User.register(newUser,req.body.password,function(err,user){
        if(err){
            req.flash("error",err.message);
            res.render("register");
        }else{
            passport.authenticate("local")(req,res,function(){
                req.flash("success","Welcome to YelpCamp" + user.username);
                res.redirect("/campgrounds");
            })
        }
    })
});

//SHOW LOG-IN PAGE
router.get("/login",function(req,res){
    res.render("login");
});

//HANDLE LOG-IN LOGIC
router.post("/login",passport.authenticate("local",{
    successRedirect: "/campgrounds",
    failureRedirect: "/login"
}),function(req,res){
});

//LOG-OUT ROUTE
router.get("/logout",function(req,res){
    req.logout();
    req.flash("success","Logged you out!");
    res.redirect("/campgrounds");
});


module.exports = router;