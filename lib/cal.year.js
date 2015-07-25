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
    return whitespace + y;

  }

};
module.exports = year;
