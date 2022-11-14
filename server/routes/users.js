var express = require("express");
var router = express.Router();
const db = require("../model/database/helper");

// GET all
router.get("/", async function(req, res, next) {
  db("SELECT * FROM userInfo;")
    .then(results => {
      res.send(results.data);
    })
    .catch(err => res.status(500).send(err));
});


// GET one user by ID (DB: userdata; table: userInfo)
router.get("/:id", async function(req, res, next) { 
  
    let userId = req.params.id;
  
    try {
      let results = await db(`SELECT * FROM userInfo WHERE id = ${userId}`);
      let users = results.data;
      if (users.length === 0) {
        res.status(404).send({ error: "User not found" });
      } else {
        res.send(users[0]);
      }
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  });

  module.exports = router;