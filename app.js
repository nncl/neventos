"use strict";

let express = require('express')
, app = express()
, load = require('express-load')
, port = 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

app.listen(port, () => {
 console.log("App running on port", port);
});
