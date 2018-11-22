const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();
const config = require('./config/config');
const dbConf = require('./config/database');
const instaConf = require('./config/instagram');
const instaService = require('./services/instaService');

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

app.listen(config.port, () => {
  console.log(`App is runing on port ${config.port}`);
});

mongoose.connect(
  dbConf.db.uri,
  { useNewUrlParser: true },
  () => {
    console.log('Connected to database');
  }
);

app.get('/', (req, res) => res.render('index'));
app.get('/auth/instagram/callback', instaService);
app.get('/login-instagram', (req, res) =>
  res.redirect(instaConf.instagram.auth_url)
);
