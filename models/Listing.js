const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListingSchema = new Schema ({
    subject :{
        type:String,
        required:true
    },
    course: {
        type:String,
        required:true
    },
    title: {
        type:String,
        required:true
    },
    author: {
        type:String,
        required:true
    },
    price: {
        type:Number,
        required:true
    }
});

const Listing = mongoose.model("Listing", ListingSchema);

module.exports = Listing;