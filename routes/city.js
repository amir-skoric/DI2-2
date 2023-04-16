var express = require('express');
var router = express.Router();
var cityCollection = require('../database/schemas/cityCollection')

/* GET 1 city. */
router.get('/:id', async (req, res, next) => {
  const data = await cityCollection.findOne({ name: req.params.id })
  if (await data === null) {
    return res.status(404).json({ error: "City not found!"})
  }
  else {
  res.send( data );
}
});

module.exports = router;
