const mongoose = require('mongoose');

//city Schema
const schLanguage = new mongoose.Schema( {
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

const languageCollection = new mongoose.model("countrylanguage", schLanguage, "countrylanguage");

module.exports = languageCollection;