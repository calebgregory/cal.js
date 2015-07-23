var should = require('chai').should();
var path = require('path');

describe('Cal', function() {
  describe('#month', function() {

    var m = require(path.join(process.cwd(),'/lib/months'));

    it('should return the month name from a number', function() {
      m[1].name.should.equal('January');
    });

    it('should return the number of days in the month', function() {
      m[1].numDays.should.equal(31);
    });

  });
});
