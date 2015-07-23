var should = require('chai').should();
var path = require('path');
var year = require(path.join(process.cwd(),'/lib/cal.year'));

describe('Today', function() {
  it('should know the current month', function() {
    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    today.month.should.equal(7);
  });
});