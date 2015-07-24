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
  month : {
    "1" : {
      name   : "January",
      numDays: 31
    },
    "2" : {
      name   : "February",
      numDays: function(y) {
        return this.isLeapYear(y) ? 29 : 28;
      }
    },
    "3" : {
      name   : "March",
      numDays: 31
    },
    "4" : {
      name   : "April",
      numDays: 30
    },
    "5" : {
      name   : "May",
      numDays: 31
    },
    "6" : {
      name   : "June",
      numDays: 30
    },
    "7" : {
      name   : "July",
      numDays: 31
    },
    "8" : {
      name   : "August",
      numDays: 31
    },
    "9" : {
      name   : "September",
      numDays: 30
    },
    "10" : {
      name   : "October",
      numDays: 31
    },
    "11" : {
      name   : "November",
      numDays: 30
    },
    "12" : {
      name   : "December",
      numDays: 31
    }
  }
};
module.exports = year;
