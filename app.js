"use strict";

let express = require('express')
, app = express()
, load = require('express-load')
, bodyParser = require('body-parser')
, cookieParser = require('cookie-parser')
, expressSession = require('express-session')
, port = 8080; // It was throwing an random error. TODO Update it to 3000

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(cookieParser('neventos'));
app.use(expressSession());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(port, () => {
 console.log("App running on port", port);
});
