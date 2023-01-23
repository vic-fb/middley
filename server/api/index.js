const cors = require('cors');
const app = require('express')();

const logger = require('morgan');
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const usersRouter = require('../routes/users');
const authRouter = require('../routes/auth');
const indexRouter = require('../routes');
const activitiesRouter = require('../routes/activities');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/auth', authRouter);
app.use('/api/activities', activitiesRouter);

module.exports = app;
