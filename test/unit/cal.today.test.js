var should = require('chai').should();
var path = require('path');
var year = require(path.join(process.cwd(),'/lib/cal.year'));

describe('Today', function() {
  it('should know the current month', function() {
    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    today.month.should.equal(7);
  });

  it('should know the current day', function() {
    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    today.day.should.equal(23);
  });

  it('should know the current year', function() {
    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    today.year.should.equal(2015);
  });

  it('should know what day of the week it is', function() {
    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    today.weekday.should.equal('Thursday');
  });
});
