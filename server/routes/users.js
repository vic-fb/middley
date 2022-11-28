const express = require('express');
const { ensureSameUser } = require('../middleware/guards');

const router = express.Router();
const db = require('../model/database/helper');

router.get('/:id', ensureSameUser, async (req, res) => {
  const userId = req.params.id;
  try {
    const results = await db(`SELECT * FROM users WHERE id = ${userId}`);
    const users = results.data;
    if (users.length === 0) {
      res.status(404).send({ error: 'User not found' });
    } else {
      const { password, email, ...user } = users[0];
      res.send(user);
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.put('/:id', ensureSameUser, async (req, res) => {
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
      res.send({ message: 'User updated' });
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
