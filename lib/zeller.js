var zeller = {
  convertMonth : function(m) {
    return (m === 1) ? 13 :
           (m === 2) ? 14 :
           m;
  },
  decodeDay : function(d) {
    return (d === 0) ? 7 : d;
  },
  yearOfTheCentury : function(y) {
    return y % 100;
  },
  zeroBasedCentury : function(y) {
    return Math.floor(y / 100);
  },
};

module.exports = zeller;
