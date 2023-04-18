const mongoose = require('mongoose');

//city Schema
const schCountry = new mongoose.Schema( {
    code: String,
    name: String,
    continent: String,
    region: String,
    surfacearea: Number,
    indepyear: Number,
    population: Number,
    lifeexpectancy: Number,
    gnp: Number,
    gnpold: Number,
    localname: String,
    governmentform: String,
    headofstate: String,
    capital: Number,
    code2: String
})

const cityCollection = new mongoose.model("country", schCountry, "country");

module.exports = cityCollection;