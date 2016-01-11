var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
timestamp = require('./public/js/timestamp.js');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.get('/:time_stamp', function(req, res) {
  var decodedTimestamp = decodeURIComponent(req.params.time_stamp);
  var message = timestamp(decodedTimestamp);
  res.json(message);
});

app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});
