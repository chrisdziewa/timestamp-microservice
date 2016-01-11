var moment = require('moment');

// Translates timestamp and returns an object with 
// a natural date and unix timestamp or null if 
// invalid date is provided
module.exports = function(timestamp) {
  var result = {
    unix: null,
    natural: null
  };

  if (/^[0-9]+$/.test(timestamp)) {
    timestamp = parseInt(timestamp, 10);
    result.unix = timestamp;
    result.natural = moment.unix(timestamp).format('MMMM DD, YYYY');
  } else if (moment(timestamp, 'MMMM DD, YYYY').format() !== "Invalid date" ) {
    result.unix = moment(timestamp, 'MMMM D, YYYY').utc().local().unix();
    result.natural = moment(timestamp, 'MMMM DD, YYYY').format("MMMM DD, YYYY");
  } 
  return result;
}