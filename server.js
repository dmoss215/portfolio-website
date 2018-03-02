var express = require('express');
var bodyParser = require("body-parser");
var path = require('path');

// Tells node that we are creating an "express" server
var app = express();

// Sets an initial port.
var PORT = process.env.PORT || 8080;

// serve static content
app.use(express.static(path.join(__dirname, "public")));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require('./routes/htmlRoute')(app);

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
  });