const mongoose = require("mongoose");

//city Schema
const schCity = new mongoose.Schema({
  oldid: {
    type: Number,
  },
  name: {
    type: String,
    required: true,
  },
  countrycode: {
    type: String,
    required: true,
  },
  district: {
    type: String,
  },
  population: {
    type: Number,
  },
});

const cityCollection = new mongoose.model("City", schCity, "city");

module.exports = cityCollection;
