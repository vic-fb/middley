/* eslint-disable no-console */
const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { BCRYPT_WORK_FACTOR, SECRET_KEY } = require('../config');
const db = require('../model/database/helper');

router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, BCRYPT_WORK_FACTOR);

  try {
    const sql = `
            INSERT INTO userInfo (username, email, password)
            VALUES ('${username}', '${email}', '${hashedPassword}')
        `;
    await db(sql);
    res.send({ message: 'Registration succeeded' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    const results = await db(`SELECT * FROM userInfo WHERE email = '${email}'`);
    console.log(results);
    if (results.data.length === 0) {
      res.status(401).send({ error: 'Login failed' });
    } else {
      const user = results.data[0];
      const passwordsEqual = await bcrypt.compare(password, user.password);
      console.log(passwordsEqual);
      if (passwordsEqual) {
        const payload = { userId: user.id };
        const token = jwt.sign(payload, SECRET_KEY);
        delete user.password;
        res.send({
          message: 'Login succeeded',
          token,
          user,
        });
      } else {
        res.status(401).send({ error: 'Login failed' });
      }
    }
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

module.exports = router;
