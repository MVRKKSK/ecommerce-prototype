const router = require("express").Router();
const Products = require("../models/Products")

router.post("/" , async (req,res)=>{
    const newProduct = new Products(req.body);
    try{
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct)
    }
    catch(err){
        res.status(500).json(err);
    }
})

router.get("/" , async (req,res) => {
    const showdata = await Products.find();
    try{
        res.status(200).json(showdata)
    }
    catch(err){
        res.status(500).json(err)
    }
})

module.exports = router