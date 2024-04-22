require("dotenv").config()

const mongoose = require('mongoose')

const connectToDb = async() => { 
  await mongoose.connect(process.env.CONNECTIONSTR);
// -> This is how the app connects to our database
    console.log("Currently Connected to MongoDB Cluster")
}
module.exports = connectToDb