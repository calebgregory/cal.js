var os = require('os');

var month = {

  addLine : function(s,m,y) { // s = first number in line, m = month, y = year

    var path = require('path'); // how many days are in this month?
    var numDays = require(path.join(process.cwd(),'/lib/year')).numDays(m,y);

    var output = '';       // initialize output
    var firstDigit = true;

    if (s === 1) {                //is s the first day in the month?
      var day1 = require(path.join(process.cwd(),'/lib/zeller.js')).weekday(y,m,1);

      var numSpaces = this.startIndex(day1);
      numSpaces =
        numSpaces > 0 ?
        numSpaces - 1 :
        numSpaces;
      var whitespace =
        numSpaces > 0 ?
        new Array(numSpaces).join(' ') :
        '';                       //if so, we need
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

//    output +=
//      os.platform() === 'linux' ?
//      '  ' : // line length on linux : 22
//      '';    // " " on darwin : 20

    return output+'\n';

  },
  days : function(m,y) {

    var path = require('path');
    var day1 = require(path.join(process.cwd(),'/lib/zeller.js')).weekday(y,m,1);

    var output = []; // initialize output

    output = output.concat(this.addLine(1,m,y));           // add first line

    var i = 9;                                    // OFFSET = 9 + (7 * (L-2)) - day1,
    while (i-day1 <= 31) {                        //   where L = line number > 2;
      output =                                    // firstWeekDayOfMonth : 1 2 3 4 5 6 7
        output.concat(this.addLine(i-day1,m,y));  // whatDayThatNumMeans : S M T W R F S
      i += 7;                                     //      nextMondayDate : 8 7 6 5 4 3 2
    }

    var blankLine =
//      os.platform() === 'linux' ?
//      new Array(23).join(' ') + '\n' : // linux blank line : 22 spaces
      '\n';                            // " " darwin : just a newline

    output =
      output.length < 6 ?
      output.concat(blankLine) :
      output;
    return output.join('');

  },
  display : function(m,y) {

    var output = [];
    output = output
      .concat(this.title(m,y))
      .concat(this.wkdys)
      .concat(this.days(m,y));

    if(os.platform() === 'linux') {
      output = output.map(function(line) {
        if(line.split('\n').length > 2) {
          line = line
            .split('\n')
            .slice(0,6)
            .map(function(row) {
              var numSpaces = 22 - row.length + 1;
              var trailingSpace = new Array(numSpaces).join(' ');
              return row+ trailingSpace+ '\n';
            })
            .join('');
        } else {
          line = line.replace(/(\n)/g,'');
          var numSpaces = 22 - line.length + 1;
          var trailingSpace = new Array(numSpaces).join(' ');
          line = line+ trailingSpace+ '\n';
        }
        return line;
      });
    }

    return output.join('');

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
    var monthName = require(path.join(process.cwd(),'/lib/year')).monthName[m];

    var output = monthName + ' ' + y;

    var numSpaces = this.startIndex(0,output)+1;
    var whitespace =
      numSpaces ?
      new Array(numSpaces).join(' ') :
      '';
    output = whitespace + output;
    return output+'\n';

  },
  wkdys : 'Su Mo Tu We Th Fr Sa\n'

};

module.exports = month;
