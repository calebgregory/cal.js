var path = require('path');
var should = require('chai').should();

var month = require(path.join(process.cwd(),'/lib/cal.month'));

describe('Month', function() {
  it('should print an evenly spaced title with year name', function() {
    month(title).should.equal('     July 2015');
  });
});
