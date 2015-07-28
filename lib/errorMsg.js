module.exports = function(y,m) {

  if (arguments.length > 1) {
    return 'cal: ' + m + ' is neither a month number (1..12) nor a name';
  } else {
    return 'cal: year ' + y + ' not in range 1753..9999';
  }

};
