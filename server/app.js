var express = require('express');
var path = require('path');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors')

var items = require('./routes/items');

var app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var originsWhitelist = [
  'http://localhost:4200'
];

var corsOptions = {
  origin: function (origin, callback) {
    var isWhitelisted = originsWhitelist.indexOf(origin) !== -1;
    callback(null, isWhitelisted);
  },
  credentials: true
}

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

if (app.get("env") === "production") {
  app.use(express.static(path.join(__dirname, '../client')));
}

app.use('/api/items', items);
app.use('/api/items/:id', items);

app.use('*', function (req, res) {
  res.sendfile(path.join(__dirname, '../client/index.html'));
});

module.exports = app;
