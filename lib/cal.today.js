var date = new Date(); // e.g. Thu Jul 23 2015 14:28:07 GMT-0500 (CDT)

var monthToNum = {
  'Jan' : 1,
  'Feb' : 2,
  'Mar' : 3,
  'Apr' : 4,
  'May' : 5,
  'Jun' : 6,
  'Jul' : 7,
  'Aug' : 8,
  'Sep' : 9,
  'Oct' : 10,
  'Nov' : 11,
  'Dec' : 12
};

var today = {
  month : monthToNum[date.toString().split(' ')[1]],
  day : +date.toString().split(' ')[2],
  year : +date.toString().split(' ')[3],
//  weekday : zeller(this.day,this.month,this.year)
};

module.exports = today;
