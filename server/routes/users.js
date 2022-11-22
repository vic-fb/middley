const express = require('express');

const router = express.Router();
const db = require('../model/database/helper');

router.get('/', async (req, res) => {
  db('SELECT * FROM users;')
    .then((results) => {
      res.send(results.data);
    })
    .catch((err) => res.status(500).send(err));
});

router.get('/:id', async (req, res) => {
  const userId = req.params.id;

  try {
    const results = await db(`SELECT * FROM users WHERE id = ${userId}`);
    const users = results.data;
    if (users.length === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      res.send(users[0]);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put('/:id', async (req, res) => {
  const userId = req.params.id;
  const { home, work } = req.body;

  try {
    const result = await db(`SELECT * FROM users WHERE id = ${userId}`);
    if (result.data.length === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      const sql = `
                UPDATE users 
                SET home = '${home}', work = '${work}'
                WHERE id = ${userId}
            `;
      await db(sql);
      // next lines are unnecessary, could just send a message if response ok?
      const myResult = await db(`SELECT * FROM users WHERE id = ${userId}`);
      const user = myResult.data;
      res.send(user);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
