const mongoose = require("mongoose");
const carSchema = new mongoose.Schema({
    make: String,
    model: String
})

const Car = mongoose.model("Car", carSchema)

module.exports = Car