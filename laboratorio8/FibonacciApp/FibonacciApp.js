var express = require('express');
var FibonacciService = require('./Services/FibonacciService')

var app = express();

app.get('/fibonacci/:nthIn', function (req, res) {
  
  console.time('fibonacci')
  var nth = FibonacciService.getNthNumberInSequence(parseInt(req.params.nthIn))
  console.timeEnd('fibonacci');
  res.send('The answer is ' + nth);
  console.log("HELLO");
});

app.get('/', function (req, res) {  
  res.send('Hello World');
});

app.listen(3000, function () {
  console.log('Fibonacci App listening on port 3000!');
});
