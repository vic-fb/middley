const express = require('express');

const router = express.Router();
const yelp = require('yelp-fusion');

const client = yelp.client('YELP_API_KEY');
require('dotenv').config();

// we do not know yet where lat and long will come from
function getOptions(category, latitude = 59.3251172, longitude = 18.0710935) {
  const parameters = {
    latitude,
    longitude,
    radius: 500,
    categories: '',
  };
  switch (category) {
    case 'eat':
      parameters.categories = 'restaurants';
      break;
    // case 'drink':
    default:
      break;
  }
  return client.search(parameters).then((response) => response.jsonBody.businesses[0].name)
    .catch((error) => { console.log(error); });
}

router.get('/:category', async (req, res) => {
  const { category } = req.params;
  getOptions(category)
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});
