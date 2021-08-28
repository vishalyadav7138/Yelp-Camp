
var express    = require("express"),
    app        = express(),
    mongoose   = require("mongoose"),
    bodyParser = require('body-parser');

app.set("view engine","ejs");

mongoose.connect("mongodb://localhost:27017/yelp_camp", { useUnifiedTopology: true, useNewUrlParser: true })

app.use(bodyParser.urlencoded({ extended: true }));

var campgroundSchema=new mongoose.Schema({
    name: String,
    image: String,
    description: String
})

var Campground=mongoose.model("Campground",campgroundSchema);

// Campground.create(
//     {
//         name: "Granite Hill",
//         image: "https://projectcamping.com/wp-content/uploads/2019/06/how-to-choose-a-campsite.png",
//         description: "This is huge Granite Hill!!!"
//     },function(err,campground){
//         if(err){
//             console.log(err);
//         }else{
//             console.log("NEWLY CREATED CAMPGROUND: ");
//             console.log(campground);
//         }
//     })

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    Campground.find({},function(err,allCampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campgrounds:allCampgrounds});
        }
    });
});

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var desc=req.body.description;
    var newCampground={name: name, image: image, description: desc};
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds");
        }
    });
});

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show",{campground: foundCampground});
        }
    }) 
});

app.listen(3000,function(){
    console.log("YelpCamp is Online!!");
});