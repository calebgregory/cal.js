var year = {
  isLeapYear : function(y) {

    var isIt =
      y % 4 === 0 ?
      true :
      false;
    isIt =
      y % 100 === 0 ?
        y % 400 === 0 ?
        true  :
        false :
      isIt;
    return isIt;

  },
  monthLine : function(s) { // s = starting month
    var path = require('path')
    var month = require(path.join(process.cwd(),'/lib/cal.month'));

    var output = ''; // initialize output

    for (var i = 1; i < 4; i++) { // iterates 3 times, once for each column
      var L = output.length;
      var m = this.monthName[i + s - 1];
      var numSpaces = month.startIndex(0,m)+1; // +1 because we're using .join(' ')
      var whitespace = new Array(numSpaces).join(' ');
      var moreNumSpaces = 20 - (numSpaces + m.length) +4;
      output += whitespace + m;
      var moreWhitespace =
        i === 3 ?
        '\n' :
        new Array(moreNumSpaces).join(' ');
      output += moreWhitespace;
    }

    return output;
  },
  monthName : {

    '1'  : 'January',
    '2'  : 'February',
    '3'  : 'March',
    '4'  : 'April',
    '5'  : 'May',
    '6'  : 'June',
    '7'  : 'July',
    '8'  : 'August',
    '9'  : 'September',
    '10' : 'October',
    '11' : 'November',
    '12' : 'December'

  },
  numDays : function(m,y) {

    if (m > 12) {                              // 1   31 | 7   31
      return 0;                                // 2   2X | 8   31
    } else if (m === 2) {                      // 3   31 | 9   30
      return year.isLeapYear(y) ? 29 : 28;     // 4   30 | 10  31
    } else if (m%2   && m<8 || m%2-1 && m>7) { // 5   31 | 11  30
      return 31;                               // 6   30 | 12  31
    } else {
      return 30;
    }

  },
  title : function(y) {

    var whitespace = new Array(30).join(' ');
    return whitespace + y + '\n\n';

  },
  wkdys : function() {
    var weekdays = 'Su Mo Tu We Th Fr Sa';
    return [ weekdays, weekdays, weekdays ].join('  ') + '\n';
  }

};
module.exports = year;
