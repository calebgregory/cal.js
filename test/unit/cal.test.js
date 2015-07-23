var should = require('chai').should();
var assert = require('chai').assert;
var path = require('path');

describe('Cal', function() {

  describe('#year', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should return the month name from a number', function() {
      yr[1].name.should.equal('January');
    });

    it('should return the number of days in the month', function() {
      yr[1].numDays.should.equal(31);
    });

    it('should return a falsy value if user enters a month that doesn\'t exist', function() {
      assert.equal(yr[13],undefined);
    });

    it('should return the correct number of days for each month', function() {
      var year = [
        { "January"   : 31 },
        { "February"  : 28 },
        { "March"     : 31 },
        { "April"     : 30 },
        { "May"       : 31 },
        { "June"      : 30 },
        { "July"      : 30 },
        { "August"    : 31 },
        { "September" : 30 },
        { "October"   : 31 },
        { "November"  : 30 },
        { "December"  : 31 }
      ];

      year.forEach(function(month, i) {
        yr[i+1].name.should.equal(Object.keys(month)[0])
        yr[i+1].numDays.should.equal(month[Object.keys(month)[0]])
      });
    });

    it('should return 29 if year is a leap year',function() {
      yr.isLeapYear();
      yr["2"].numDays.should.equal(29);
    });

  });

});
