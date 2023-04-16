const mongoose = require('mongoose');

//city Schema
const schCountry = new mongoose.Schema( {
    name: {
        type: String,
        required: true
    },
    continent: {
        type: String,
        required: true
    },
    region: {
        type: String
    },
    code: {
        type: String
    }
})

const cityCollection = new mongoose.model("country", schCountry, "country");

module.exports = cityCollection;