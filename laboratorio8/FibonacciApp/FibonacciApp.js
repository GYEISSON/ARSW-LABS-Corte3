var express = require('express');
var FibonacciService = require('./Services/FibonacciService')

var app = express();

app.get('/fibonacci/:nthIn', function (req, res) {
  var d = new Date();
  var n = d.getTime();
  var nth = FibonacciService.getNthNumberInSequence(parseInt(req.params.nthIn))
  var m = d.getTime();
  console.log(m-n);
  res.send('The answer is ' + nth);
});

app.get('/', function (req, res) {  
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Fibonacci App listening on port 3000!');
});
