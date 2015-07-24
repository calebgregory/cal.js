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
  }
};
module.exports = year;
