var year = {

  monthLine : function(s) { // s = starting month
    var path = require('path');
    var month = require(path.join(process.cwd(),'/lib/cal.month'));
    var yr = require(path.join(process.cwd(),'/lib/year'));

    var output = ''; // initialize output

    for (var i = 1; i < 4; i++) { // iterates 3 times, once for each column
      var L = output.length;
      var m = yr.monthName[i + s - 1];
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
  monthRow : function(s,y) {

    var path = require('path');
    var month = require(path.join(process.cwd(),'/lib/cal.month'));
    var yr = require(path.join(process.cwd(),'/lib/cal.month'));

  },
  splitByRow : function(m,y) {

    var path = require('path');
    var month = require(path.join(process.cwd(),'/lib/cal.month')).display(m,y);

    var rows = month.split('\n');
    return rows;

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
