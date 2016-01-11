var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var moment = require('moment');

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.sendFile('/public/index.html');
});

app.get('/:time_stamp', function(req, res) {
  var decodedTimestamp = decodeURIComponent(req.params.time_stamp);
  res.json(decodedTimestamp);
});

function translateTimestamp(timestamp) {
  result = {};
  if (isNaN(timestamp) && isNaN(Date.parse(timestamp))) {
    result.unix: null,
    result.natural: null 
  } else if (typeof timestamp === 'number') {
    result.unix = timestamp;

  }
}


app.listen(PORT, function() {
  console.log('Server listening on port ' + PORT);
});