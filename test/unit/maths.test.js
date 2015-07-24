var should = require('chai').should();
var path = require('path');
var math = require(path.join(process.cwd(),'/lib/maths'));

describe('Maths', function() {
  describe('#mod()', function() {
    it('should work for negative numbers', function() {
      math.mod(-5,7).should.equal(2);
    });
  });
});
