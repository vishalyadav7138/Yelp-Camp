
var express= require("express");
var app=express();

app.set("view engine","ejs");

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

var campgrounds=[
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Granite Hill", image: "https://projectcamping.com/wp-content/uploads/2019/06/how-to-choose-a-campsite.png"},
    {name: "Mountain Goat's Rest", image: "https://www.digitaledge.org/wp-content/uploads/2019/01/Tips-And-Guidelines-For-Online-Campsite-Reservations.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
    {name: "Salmon Creek", image: "https://q-cf.bstatic.com/images/hotel/max1024x768/218/218381499.jpg"},
]

app.get("/",function(req,res){
    res.render("landing");
});

app.get("/campgrounds",function(req,res){
    res.render("campgrounds",{campgrounds:campgrounds});
});

app.post("/campgrounds",function(req,res){
    var name=req.body.name;
    var image=req.body.image;
    var newCampground={name: name, image: image};
    campgrounds.push(newCampground);
    res.redirect("/campgrounds");
})

app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

app.listen(3000,function(){
    console.log("YelpCamp is Online!!");
});