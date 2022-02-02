const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
const PORT = 5000
const ProductRouter = require("./routes/Products")

app.use(express.json())
mongoose.connect(process.env.MONGO_URL , { useNewUrlParser: true, useUnifiedTopology: true }).then(() => {
    console.log("mongodb is connected")
   
}). catch((err)=>{
    console.log(err)
})

app.use("/api/products" , ProductRouter);
    

app.get("/" , (req , res) => {
    res.send("hemllo from backend")
})

app.listen(PORT , () => {
    console.log("server is listening at port 5000")
})