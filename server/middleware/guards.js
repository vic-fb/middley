/* eslint-disable no-underscore-dangle */
const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../config');

// token is found: return it; else return empty string
function _getToken(req) {
  if (!('authorization' in req.headers)) {
    return '';
  }

  const authHeader = req.headers.authorization;
  const [str, token] = authHeader.split(' ');

  return (str === 'Bearer') ? token : '';
}

// user is logged in
function ensureUserLoggedIn(req, res, next) {
  const token = _getToken(req);

  try {
    jwt.verify(token, SECRET_KEY);
    next();
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
}

// user is logged in and accessing their own page
function ensureSameUser(req, res, next) {
  const token = _getToken(req);

  try {
    const payload = jwt.verify(token, SECRET_KEY);
    if (payload.userId === Number(req.params.userId)) {
      next();
    } else {
      res.status(403).send({ error: 'Forbidden' });
    }
  } catch (err) {
    res.status(401).send({ error: 'Unauthorized' });
  }
}

module.exports = {
  ensureUserLoggedIn,
  ensureSameUser,
};
