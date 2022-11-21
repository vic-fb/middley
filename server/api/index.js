const app = require('express')();
const cors = require('cors');

const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');
const indexRouter = require('../routes');
const activitiesRouter = require('../routes/activities');

app.use(cors({
  origin: '*',
}));
app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/activities', activitiesRouter);

module.exports = app;
