var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');
var app = express();
var port = 3000;

app.use(bodyParser.urlencoded({extended:true}));

var config = 'mongodb://localhost:27017/local';
mongoose.connect(config);
mongoose.connection.on('connected', function () {
    console.log('Mongoose default connection open to ' + config);
  });
  // If the connection throws an error
mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
  });

  // When the connection is disconnected
  mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
  });

app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var router = require('./router');
app.use('/',router);

app.listen(port, () => {
    console.log('Server Running at port: ' + port);
})
