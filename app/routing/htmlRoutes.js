var path = require("path");
var express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/home.html"));
});
router.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/survey.html"));
});

module.exports = router;
