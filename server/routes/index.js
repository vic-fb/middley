const express = require('express');

const router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.send({ title: "It's working!" });
});

module.exports = router;
