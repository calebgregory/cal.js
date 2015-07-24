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

  describe('#decodeDay', function() {
    it('should return 7 if given a 0', function() {
      zeller.decodeDay(1).should.equal(1);
      zeller.decodeDay(0).should.equal(7);
    });
  });
});
