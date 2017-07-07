var express = require('express');
var app = express();
var port = process.env.PORT || 2000;

app.use(express.static('public'));                 // set the static files location /public/img will be /img for users
app.set("views", "src/views");
app.set("view engine", "ejs");

// routes
app.get("/", function (req, res) {
    res.render("index");
});

// listen (start app with node server.js) ======================================
app.listen(port, function (err) {
    console.log("running server on port " + port);
});