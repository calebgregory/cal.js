var os = require('os');

var year = {

  display : function(y) {

    var output = '';

    output += this.title(y);

    var i = 1;
    while (i < 12) {
      output+=this.monthRow(i,y);
      i+=3;
    }

    return output;
  },
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

    if(os.platform() === 'linux') {
      output = output.replace(/(\n)/,'')
      var numSpaces = 66 - output.length + 1;
      var whitespace = new Array(numSpaces).join(' ');
      output += whitespace+ '\n';
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
    for (var i = 1; i < 4; i++) {           // iterates 3 times
      var m = this.getMonth((i + s - 1),y); // in the 4x3 month matrix, i specifies the column
      m = this.splitByRow(m);               // index while s specifies the row
      months.push(m);
    }

    var whitespace =
      os.platform() === 'linux' ?
      '' :
      '  ';
    var my = this;

    var rows = months[0].map(function(el,i) {
      el += whitespace
          + my.trailingSpace(el,1)
          + months[1][i]
          + my.trailingSpace(months[1][i],2)
          + whitespace
          + months[2][i];
      return el;
    }).filter(function(el,i) {
      return i > 1;
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

    var numSpaces =
      os.platform() === 'linux' ?
      31 :
      30;
    var whitespace = new Array(numSpaces).join(' ');
    return whitespace + y + '\n\n';

  },
  trailingSpace : function(input,c) { // c = column number, e.g. March is (1,3)

    var length =
      os.platform() === 'linux' ?
      22 - input.length :
      20 - input.length;
    var trailingSpace =
      c < 3 ?
      new Array(length + 1).join(' ') :
      '\n';
    return trailingSpace;

  },
  wkdys : function() {

    var weekdays = 'Su Mo Tu We Th Fr Sa';

    var output = [ weekdays, weekdays, weekdays ].join('  ');
    output +=
      os.platform() === 'linux' ?
      '  '+ '\n' :
      '\n';

    return output;

  }

};

module.exports = year;
