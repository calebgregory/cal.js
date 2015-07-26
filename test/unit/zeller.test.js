var should = require('chai').should();
var path = require('path');
var zeller = require(path.join(process.cwd(),'/lib/zeller'));

describe('Zeller', function() {

  describe('#convertMonth()', function() {
    it('should convert January to 13 and February to 14', function() {
      zeller.convertMonth(1).should.equal(13);
      zeller.convertMonth(2).should.equal(14);
    });
  });

  describe('#convertYear()', function() {
    it('should convert year for Jan and Feb to year--', function() {
      zeller.convertYear(2015,1).should.equal(2014);
      zeller.convertYear(2015,2).should.equal(2014);
      zeller.convertYear(2015,3).should.equal(2015);
    });
  });

  describe('#yearOfTheCentury()', function() {
    it('should return the year mod 100', function() {
      zeller.yearOfTheCentury(2015).should.equal(15);
    });
  });

  describe('#zeroBasedCentury()', function() {
    it('should return the century our year is in - starting from 0', function() {
      zeller.zeroBasedCentury(2015).should.equal(20);
    });
  });

  describe('#decodeDay()', function() {
    it('should return 7 if given a 0', function() {
      zeller.decodeDay(1).should.equal(1);
      zeller.decodeDay(0).should.equal(7);
    });
  });

  describe('#decodeYear()', function() {
    it('should return the "next" year if month is Jan or Feb', function() {
      zeller.decodeYear(13,2014).should.equal(2015);
      zeller.decodeYear(14,2014).should.equal(2015);
      zeller.decodeYear(3,2015).should.equal(2015);
    });
  });

  describe('#decodeMonth()', function() {
    it('should change Jan and Feb month numbers back to 1 and 2', function() {
      zeller.decodeMonth(13).should.equal(1);
      zeller.decodeMonth(14).should.equal(2);
      zeller.decodeMonth(3).should.equal(3);
    });
  });

  describe('#weekday()', function() {
    it('should return 5 for Thursday', function() {
      zeller.weekday(2015,7,23).should.equal(5);
    });
    it('should return 7 for a saturday', function() {
      zeller.weekday(2015,8,1).should.equal(7);
    });
    it('should be accurate to 1753', function() {
      zeller.weekday(1753,3,1).should.equal(5);
    });
    it('should be accurate to 9999', function() {
      zeller.weekday(9999,3,1).should.equal(2);
    });
  });

});
