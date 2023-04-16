const mongoose = require('mongoose');

//city Schema
const schCity = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    countrycode: {
        type: String,
        required: true
    },
    district: {
        type: String
    },
    population: {
        type: Number
    }
})

const cityCollection = new mongoose.model("city", schCity, "city");

module.exports = cityCollection;