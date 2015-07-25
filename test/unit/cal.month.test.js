var path = require('path');
var should = require('chai').should();

var month = require(path.join(process.cwd(),'/lib/cal.month'));

describe('Month', function() {
  describe('#title()', function() {
    it('should print an evenly spaced title with year name', function() {
       month.title(7).should.equal('     July 2015\n');
    });
  });

  describe('#days', function() {
    it('should return a list of the names of the days in a row', function() {
      month.wkdys.should.equal('Su Mo Tu We Th Fr Sa');
    });
  });
});
