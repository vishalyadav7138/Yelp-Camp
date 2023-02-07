
var express        = require("express"),
    app            = express(),
    mongoose       = require("mongoose"),
    bodyParser     = require('body-parser'),
    passport       = require("passport"),
    localStrategy  = require("passport-local"),
    methodOverride = require("method-override"),
    flash          = require("connect-flash"),
    Campground     = require("./models/campground"),
    User           = require("./models/user"),
    seedDB         = require("./seeds"),
    Comment        = require("./models/comment");

//REQUIRING ROUTES
var campgroundRoutes = require("./routes/campgrounds"),
    commentRoutes    = require("./routes/comments"),
    indexRoutes      = require("./routes/index");

app.set("view engine","ejs");

app.use(express.static(__dirname + "/public"));
app.use(flash());
mongoose.connect("mongodb+srv://vishalyadav:Mongo7138@cluster0.0zbmvdd.mongodb.net/yelp_camp_v3?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true })
mongoose.set('useFindAndModify', false);
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({ extended: true }));

// seedDB();

//PASSPORT CONFIGURATION
app.use(require("express-session")({
    secret : "Rusty is the best and the cutest dog in the world",
    resave : false,
    saveUninitialized : false
}))
app.use(passport.initialize());
app.use(passport.session());

passport.use(new localStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser()); 

app.use(function(req,res,next){
    res.locals.currentUser = req.user;
    res.locals.error = req.flash("error");
    res.locals.success = req.flash("success");
    next();
})

app.use("/campgrounds",campgroundRoutes);
app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/",indexRoutes);

app.listen(3000,function(){
console.log("YelpCamp is Online!!");
});
