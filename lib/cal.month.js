var month = {
  addLine : function(s,m,y) { // s = first number in line, m = month, y = year

    var path = require('path'); // how many days are in this month?
    var numDays = require(path.join(process.cwd(),'/lib/cal.year')).numDays(m,y);

    var output = '';       // initialize output
    var firstDigit = true;

    if (s === 1) {                                 //is s the first day in the month?
      var day1 = require(path.join(process.cwd(),'/lib/zeller.js')).weekday(y,m,1);

      var whitespace = new Array(this.startIndex(day1)-1).join(' '); //if so, we need
      output += whitespace;       //to add some whitespace up to this day of the week
    }

    for ( ; output.length < 20 && s <= numDays; s++ ) {
      s = (s < 10) ? ' '+s : s; // add a whitespace for single digit numbers
      if (firstDigit) {
        output += s;
        firstDigit = false;
      } else if (s <= numDays) {
        output += ' ' + s;
      }
    }
    return output+'\n';
  },
  days : function(m,y) {
    var path = require('path');
    var day1 = require(path.join(process.cwd(),'/lib/zeller.js')).weekday(y,m,1);
    var L = 20; // length of a line
  },
  startIndex : function(d) {
    //   day : ' 1  2  3  4  5  6  7'
    // index : ' 2  5  8 11 14 17 20'
    return d*3 - 1;
  },
  title : function(m) {

    // WHITESPACE BY MONTH
    // m = month,
    // n = number of characters in month,
    // l = whitespace on left,
    // r = whitespace on right.

    //           With yearly display
    // m   n l r
    // 1 : 7 6 7 || 7  : 4 8 8
    // 2 : 8 6 6 || 8  : 6 7 7
    // 3 : 5 9 8 || 9  : 9 5 6
    // 4 : 5 7 8 || 10 : 7 6 7
    // 5 : 3 8 9 || 11 : 8 6 6
    // 6 : 4 8 8 || 12 : 8 6 6

    //           With monthly display
    // m : n  l r
    // 1 : 12 4 4 || 7  :  9 5 6
    // 2 : 13 3 4 || 8  : 11 4 5
    // 3 : 10 5 5 || 9  : 14 3 3
    // 4 : 10 5 5 || 10 : 12 4 4
    // 5 :  8 6 6 || 11 : 13 3 4
    // 6 :  9 5 6 || 12 : 13 3 4

    var L = 20; // number of columns
  },
  wkdys : 'Su Mo Tu We Th Fr Sa\n'
};

module.exports = month;
