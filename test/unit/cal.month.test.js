var path = require('path');
var should = require('chai').should();

var month = require(path.join(process.cwd(),'/lib/cal.month'));

describe.only('Month', function() {
  describe('#title()', function() {
    it('should print an evenly spaced title with year name', function() {
       month.title(7).should.equal('     July 2015\n');
    });
  });

  describe('#wkdys', function() {
    it('should return a list of the names of the days in a row', function() {
      month.wkdys.should.equal('Su Mo Tu We Th Fr Sa\n');
    });
  });

  describe('#days()', function() {
    it('should start with the first day of the month, and print a list of days', function() {
      var output = [
        '          1  2  3  4\n',
        ' 5  6  7  8  9 10 11\n',
        '12 13 14 15 16 17 18\n',
        '19 20 21 22 23 24 25\n',
        '26 27 28 29 30 31\n'
      ].join('');
      month.days(7,2015).should.equal(output);
    });
  });
});
