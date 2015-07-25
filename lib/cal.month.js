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

    var output = ''; // initialize output

    output += this.addLine(1,m,y);        // add first line

    var i = 9;                            // OFFSET = 9 + (7 * (L-2)) - day1,
    while (i <= 31) {                     //   where L = line number > 2;
      output += this.addLine(i-day1,m,y); // firstWeekDayOfMonth : 1 2 3 4 5 6 7
      i += 7;                             // whatDayThatNumMeans : S M T W R F S
    }                                     //      nextMondayDate : 8 7 6 5 4 3 2
    return output;

  },
  display : function(m,y) {

    var output = '';
    output += this.title(m,y)
            + this.wkdys
            + this.days(m,y);

  },
  startIndex : function(d,m) {

    if (!m) {
      // INDEX OF DAY ON A ROW OF 20 COLUMNS
      //   day : ' 1  2  3  4  5  6  7'
      // index : ' 2  5  8 11 14 17 20'
      return d*3 - 1;
    } else {
      // for documentation, see ./whitespace.txt
      return Math.floor( (20 - m.length)/2 );
    }

  },
  title : function(m,y) {

    var path = require('path');
    var monthName = require(path.join(process.cwd(),'/lib/cal.year')).monthName[m];

    var output = monthName + ' ' + y;

    var whitespace = new Array(this.startIndex(0,output)+1).join(' ');
    output = whitespace + output;
    return output+'\n';

  },
  wkdys : 'Su Mo Tu We Th Fr Sa\n'

};

module.exports = month;
