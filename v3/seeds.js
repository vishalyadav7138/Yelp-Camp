var mongoose   = require("mongoose"),
Campground = require("./models/campground"),
Comment    = require("./models/comment");

var data=[
    {
        name: "Granite Hill",
        image: "https://projectcamping.com/wp-content/uploads/2019/06/how-to-choose-a-campsite.png",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Hill Top",
        image: "https://media-cdn.tripadvisor.com/media/photo-s/13/b8/8a/28/olakira-camp-asilia-africa.jpg",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    },
    {
        name: "Forest Blast",
        image: "https://q-cf.bstatic.com/images/hotel/max1024x768/194/194102058.jpg",
        description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    }
]


function seedDB(){
    Campground.deleteMany({}, function(err){
        // if(err){
        //     console.log(err);
        // }else{
        //     console.log("Removed Campground!!")

        //     data.forEach(function(seed){
        //         Campground.create(seed,function(err,campground){
        //             if(err){
        //                 console.log(err);
        //             }else{
        //                 console.log("Campground added!!")

        //                 Comment.create(
        //                     {
        //                         text: "Great Place but no internet!",
        //                         author: "myself"
        //                     },function(err,comment){
        //                         if(err){
        //                             console.log(err);
        //                         }else{
        //                             campground.comments.push(comment);
        //                             campground.save();
        //                         }
        //                     })
        //             }
        //         })
        //     })
        // }
    })
}

module.exports = seedDB;