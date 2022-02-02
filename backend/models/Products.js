const mongoose = require("mongoose");

const Products = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
        default:"normal"
    },
    subcategory:{
        type:String,
        required:true,
        default:"normal"
        
    },
    gradingtype:{
        type:String,
        required:true,
        default:"normal"
        
    },
    thickness:{
        type:String,
        required:true,
        default:"normal"
        
    },
    rating:{
        type:Number,
        required:true,
        default:0
    }
},{timestamps:true , collection:"AllProducts"})

const model = mongoose.model("All Products",Products);

module.exports = model;