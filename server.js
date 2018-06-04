var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 3000;
// dictating what logic app can use
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// specifies root for static variables
app.use(express.static("app"));

// direction logic for routing js files
require("./app/routing/apiRoutes.js");
require("./app/routing/htmlRoutes.js");

// listen for local host
app.listen(PORT, function () {
    console.log("Server listening on: http://localhost:" + PORT);
});