var express = require("express");
var router = express.Router();

const con = require("../controllers/controllers");
const conw = require("../controllers/controllersworld");

/* GET home page. */
router.get("/", function (req, res) {
  res.render("index");
});

router.post("/register", con.postUser, function (req, res) {
  res.redirect("/");
});

//
/*
 * Setup REST endpoints
 */

// Getting countries
router.get("/countries", conw.getCountries, function (req, res) {
  // variable from middleware
  res.json({ countries: res.locals.countries });
});

// Getting cities
router.get("/cities", conw.getCities, function (req, res) {
  // variable from middleware
  res.json({ cities: res.locals.cities });
});

// Getting cities by country
router.get('/citiescountry/:country', conw.getCitiesByCountry, function (req, res) {
  // variable from middleware
  res.json({ cities: res.locals.cities });
});

// Getting language by country
router.get('/languagescountry/:country', conw.getLanguagesByCountry, function (req, res) {
  // variable from middleware
  res.json({ languages: res.locals.languages });
});

// Create city
router.post("/cities", conw.postCity, function (req, res) {
  res.status(201).json({ message: "city created" });
});

// Getting city
router.get("/cities/:city", conw.getCity, function (req, res) {
  res.json({ city: res.locals.city });
});

// Update city
router.patch("/cities/:city", function (req, res) {});

// Delete city
router.delete("/cities/:city", conw.deleteCity, function (req, res) {
  res.json({ message: "city deleted"})
});

module.exports = router;
