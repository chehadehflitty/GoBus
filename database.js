const mongoose = require("mongoose");
require("dotenv").config();
exports.connectDB = async () =>{
  try{
    await mongoose.connect(process.env.MongoDB_URI);
    console.log("mongoDB connected")
  }
  catch(err){
    console.log(err);
    process.exit(1);
  }
}