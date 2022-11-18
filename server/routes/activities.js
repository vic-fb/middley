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
  const appToYelp = {
    eat: ['restaurants'],
    drink: [
      'beer_and_wine',
      'breweries',
      'brewpubs',
      'bubbletea',
      'cideries',
      'coffee',
      'coffeeshops',
      'distilleries',
      'internetcafe',
      'juicebars',
      'kombucha',
      'meaderies',
      'gluhwein',
      'tea',
      'wineries',
    ],
    outdoor: ['gardens', 'outdoormovies', 'waterparks', 'amusementparks'],
    music: ['musicvenues'],
    spa: ['spas', 'hotsprings', 'massage', 'skincare', 'tanning'],
    fitness: ['fitness'],
  };

  let yelpUrl = `https://api.yelp.com/v3/businesses/search?latitude=${latitude}&longitude=${longitude}&radius=${radius}`;
  if (category !== 'surprise') {
    const categories = appToYelp[category].join(',');
    yelpUrl += `&categories=${categories}`;
  } else {
    yelpUrl += '&attributes=hot_and_new';
  }

  // if (!categories) {
  //   // what to do when we don't have a mapping?
  //   return 'No activity found';
  // }
  console.log(yelpUrl);
  const response = await fetch(yelpUrl, options);
  const data = await response.json();
  return data.businesses.map(
    ({
      name,
      image_url: imgUrl,
      location,
      rating,
      price,
      review_count: reviewCount,
    }) => ({
      name,
      imgUrl,
      displayAddress: location.display_address.join(', '),
      rating,
      price,
      reviewCount,
    }),
  );
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
