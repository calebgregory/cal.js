var should = require('chai').should();
var assert = require('chai').assert;
var path = require('path');

var yearDictionary = [
  { "January"   : 31 },
  { "February"  : 28 },
  { "March"     : 31 },
  { "April"     : 30 },
  { "May"       : 31 },
  { "June"      : 30 },
  { "July"      : 31 },
  { "August"    : 31 },
  { "September" : 30 },
  { "October"   : 31 },
  { "November"  : 30 },
  { "December"  : 31 }
];

describe('Year', function() {

  describe('#isLeapYear()', function() {
    var year = require(path.join(process.cwd(),'/lib/cal.year.js'));
    it('should return true if a year is a leapyear', function() {
      year.isLeapYear(2016).should.equal(true);
    });
    it('should return false if a year is not a leapyear', function() {
      year.isLeapYear(2015).should.equal(false);
    });
    it('should return false for a year like 1900 - divisible by 4 & 100 but not 400', function() {
      year.isLeapYear(1900).should.equal(false);
    });
    it('should return true for a year like 2000 - divisible by 400', function() {
      year.isLeapYear(2000).should.equal(true);
    });
  });

  describe('#numDays()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should return the number of days in January', function() {
      yr.numDays(1).should.equal(31);
    });

    it('should return the number of days in April', function() {
      yr.numDays(4).should.equal(30);
    });

    it('should return a falsy value if user enters a month that doesn\'t exist', function() {
      assert.equal(yr.numDays(13),undefined);
    });

    it('should return the correct number of days for each month', function() {
      yearDictionary.forEach(function(month, i) {
        yr.numDays(i+1).should.equal(month[Object.keys(month)[0]])
      });
    });

    it('should return 29 for Feb if year is a leap year',function() {
      yr.month["2"].numDays(2000).should.equal(29);
    });

  });

  describe('#month', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should return the month name from a number', function() {
      yr.month[1].name.should.equal('January');
    });


    it('should return the correct name for each month', function() {
      yearDictionary.forEach(function(month,i) {
        yr.month[i+1].name.should.equal(Object.keys(month)[0])
      });
    });

  });

});
