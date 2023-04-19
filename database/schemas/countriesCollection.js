const mongoose = require('mongoose');

//city Schema
const schCountry = new mongoose.Schema( {
    countrycode: String,
    language: String,
    isofficial: Boolean,
    percentage: Number
})

const cityCollection = new mongoose.model("country", schCountry, "country");

module.exports = cityCollection;