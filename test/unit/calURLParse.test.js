var expect = require('chai').expect;
var path = require('path');
var parse = require(path.join(process.cwd(),'/lib/calURLParse'));

describe('calURLParse', function() {
  it('should handle the base /cal route', function() {
    expect(parse('/cal')).to.equal('./app.js');
  });
  it('should handle a full year /cal/2015 route', function() {
    expect(parse('/cal/2015')).to.equal('./app.js 2015');
    expect(parse('/cal/999999')).to.equal('./app.js 999999');
  });
  it('should handle a month-first route /cal/1/2015 route', function() {
    expect(parse('/cal/1/2015')).to.equal('./app.js 1 2015');
  });
  it('should handle a month-last /cal/2015/1 route', function() {
    expect(parse('/cal/2015/1')).to.equal('./app.js 1 2015');
  });
  it('should handle invalid routes', function() {
    expect(parse('/cal/foo')).to.equal(null);
    expect(parse('/cal/foo/bar')).to.equal(null);
    expect(parse('/cal/foo/2015')).to.equal(null);
    expect(parse('/cal/1/bar')).to.equal(null);
  });
});
