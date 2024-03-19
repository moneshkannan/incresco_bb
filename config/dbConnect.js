const mongoose = require('mongoose')
require('dotenv').config();
const dbConnect = async () => {
    try{
        // await mongoose.connect(process.env.MONGO_DB_URL)
        await mongoose.connect("mongodb+srv://monesh:root@cluster0.emcrxva.mongodb.net/incresco")
        console.log("database connected successfully")
    }catch(err){
        throw new Error(err)
    }
}

module.exports = dbConnect