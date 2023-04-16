var express = require('express');
var router = express.Router();
var countriesCollection = require('../database/schemas/countriesCollection')

/* GET 1 city. */
router.get('/', async (req, res, next) => {
  const data = await countriesCollection.find()
  if (await data === null) {
    return res.status(404).json({ error: "City not found!"})
  }
  else {
  res.send( data );
}
});

module.exports = router;
