// server.js

// modules =================================================
var express        = require('express');
var app            = express();
var path           = require('path');
var bodyParser     = require('body-parser');
var methodOverride = require('method-override');

// configuration ===========================================

// config files
// var db = require('./config/db');

// serve static files
app.use(express.static(path.join(__dirname + '/public')));

// send out the index file
app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname + '/public/index.html'));
});

// start the server
app.listen(5555);
console.log('Magic happens on port 5555!')