
var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.sendFile('index.html', {
    root: 'app'
  });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

app.use('/jquery', express.static(__dirname + '/node_modules/jquery/dist/'));