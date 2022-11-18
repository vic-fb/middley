const fetch = require('node-fetch');
const express = require('express');

const router = express.Router();
const { YELP_API_KEY } = process.env;

async function getActivities(category, latitude, longitude) {
  const options = {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${YELP_API_KEY}`,
    },
  };
  const radius = 200;
  let categories = '';
  switch (category) {
    case 'eat':
      categories = 'restaurants';
      break;
    // case 'drink':
    default:
      break;
  }
  const yelpUrl = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}&categories=${categories}`;
  const response = await fetch(yelpUrl, options);
  const data = await response.json();
  return data.businesses.map(({
    name, image_url: imgUrl, location, rating, review_count: reviewCount,
  }) => ({
    name, imgUrl, displayAddress: location.display_address.join(', '), rating, reviewCount,
  }));
  // return data;
}

router.get('/:latitude/:longitude/:category', async (req, res) => {
  const { category, latitude, longitude } = req.params;
  getActivities(category, latitude, longitude)
    .then((results) => {
      res.send(results);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send(err);
    });
});

module.exports = router;
