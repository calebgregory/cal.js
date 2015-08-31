var cp = require('child_process');
var http = require('http');
var path = require('path');
var should = require('chai').should();

describe('routes', function() {

  this.timeout(7000);

  before(function() {
    require(path.join(process.cwd(),'/lib/serve'))(1337);
  });

  it('should return a year when a year is put in the route', function(done) {
    testRoute(2015,'/cal/2015',done);
  });

  it('should return a month when a year and a month is put in the route', function(done) {
    testRoute('1 2015', '/cal/1/2015',done);
  });

});

function testRoute(arg,route,done) {

  var sep = arg ? ' ' : '';
  arg = arg || '';
  var cmd = './cal.js'+ sep+ arg;
  var url = 'http://localhost:1337'+ route;

  var goal = cp.execSync(cmd).toString();
  var body = '';

  http.get(url, function(res) {
    res.statusCode.should.equal(200);

    res.on('data', function(chunk) {
      body+=chunk;
    }).on('end', function() {
      body.should.equal(goal);
      done()
    });
  });

}
