const app = require('express')();
const cors = require('cors');

const usersRouter = require('../routes/users');
const indexRouter = require("../routes");

app.use(cors());
app.use('/', indexRouter);
app.use('/api/users', usersRouter);

module.exports = app;