var path = require("path");

// when htmlRotes is called via changing the page send the user a html file based on what they chose
// to go to
module.exports = function(app){
    app.get("/", function(req, res){
        res.sendFile(path.join(_dirname, "../public/home.html"));

    })
    app.get("/survey", function(req, res){
        res.sendFile(path.join(_dirname, "../public/survey.html"));

    })
    
    app.use(function(req,res){
        res.sendFile(path.join(_dirname + "/../public/home.html"));
    })
}