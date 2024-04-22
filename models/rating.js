const mongoose = require('mongoose');
const ratingSchema = new mongoose.Schema({

    user: String,
    rating: Number,
    description: String,
})

const rating = mongoose.model('Rating', ratingSchema);
module.exports = rating