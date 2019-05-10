const createError = require("http-errors");
const express = require('express');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const passport = require('passport');
const config = require('./config/database');
const mongoose = require("mongoose");

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

const port = 3000;

app.get('/', (req, res) => {
  res.send('Invalid Endpoint')
})

app.get(port, () => {
  console.log("Server started on port" + port);
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());
app.use(cors());

require('./config/passport')(passport);

app.use('/', indexRouter);
app.use('/users', usersRouter);

mongoose.connect(config.database, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("connected", () => console.log('Connected to database ' + config.database));
db.on("disconnected", () => console.log("Database disconnected"));
db.on("error", console.error.bind(console, "Database connection error:"));

module.exports = app;
