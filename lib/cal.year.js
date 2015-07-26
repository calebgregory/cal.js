var year = {

  getMonth : function(m,y) {

    var path = require('path');
    var month = require(path.join(process.cwd(),'/lib/cal.month')).display(m,y);

    return month;

  },
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
  monthRow : function(s,y) { // s = starting month, e.g. 1 for Jan, y = year

    var path = require('path');
    var month = require(path.join(process.cwd(),'/lib/cal.month'));
    var yr = require(path.join(process.cwd(),'/lib/cal.month'));

    var output = ''; // initialize output

    output += this.monthLine(s)
            + this.wkdys();

    var days = this.rowCombiner(s,y)
      .reduce(function(prev,curr) {
        var out = prev.concat(curr);
        return out+'\n';
      },'');
    output += days;

    return output;

  },
  rowCombiner : function(s,y) { // s = starting month, e.g. 1 for Jan, y = year

    var months = [];
    for (var i = 1; i < 4; i++) { // iterates 3 times
      var m = this.getMonth((i + s - 1),y); // in the month matrix, i specifies the column
      m = this.splitByRow(m);                    // index while s specifies the row
      months.push(m);
    }

    var my = this;
    var rows = months[0].map(function(el,i) {
      el += '  '
          + my.trailingSpace(el,1)
          + months[1][i]
          + my.trailingSpace(months[1][i],2)
          + '  '
          + months[2][i];
          + my.trailingSpace(months[2][i],3)
      return el;
    }).filter(function(el,i) {
      return i > 1
    });

    // var rows2 =
    //   [2,3,4,5,6,7,8].map(function(i) {
    //     var row = '';
    //     months.forEach(function(line){
    //       row += line[i];
    //     })
    //     return row;
    //   });

    return rows;

  },
  splitByRow : function(m) {

    return m.split('\n')
      .filter(function(el,i,a) {
        return i < a.length - 1;
      });

  },
  title : function(y) {

    var whitespace = new Array(30).join(' ');
    return whitespace + y + '\n\n';

  },
  trailingSpace : function(input,c) { // c = column number, e.g. March is (1,3)

    var length = 20 - input.length;
    var trailingSpace =
      c < 3 ?
      new Array(length + 1).join(' ') :
      '\n';
    return trailingSpace;

  },
  wkdys : function() {

    var weekdays = 'Su Mo Tu We Th Fr Sa';
    return [ weekdays, weekdays, weekdays ].join('  ') + '\n';

  }

};

module.exports = year;
