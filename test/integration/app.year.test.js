var path = require('path');
var should = require('chai').should();

var cp = require('child_process');

describe('Cal', function() {

  describe('year', function() {

    it('should return an annual calendar when one argument is passed in', function() {
      cp.execFile('./app.js', ['2015'], function(err,stdout_app){
        cp.exec('cal', ['2015'], function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
    });

  });
});
