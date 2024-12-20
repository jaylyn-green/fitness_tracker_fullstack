const mongoose = require('mongoose');
const database = async () =>{
    try{
        mongoose.set("strictQuery", false);
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected!");
    } catch(error){
        console.log("Database connection failed:",error);
    }
}
module.exports ={database}; 