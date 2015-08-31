var path = require('path');
var should = require('chai').should();

describe('Cal',function() {

  describe('normal year', function() {

    var cp = require('child_process');

    it('should return a correct calendar for a month', function(done) {
      cp.execFile('./cal.js', ['1','2015'], function(err,stdout_app){
        cp.exec('cal 1 2015', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
      // 1 2015
    });

  });

  describe('leap year', function() {

    var cp = require('child_process');

    it('should return a calendar with 29 days for a leapyear Feb', function(done) {
      cp.execFile('./cal.js', ['2','2016'], function(err,stdout_app){
        cp.exec('cal 2 2016', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
      // 2 2016
    });

  });

  describe('non leap year', function() {

    var cp = require('child_process');

    it('should return a calendar with 28 days for a nonleapyear Feb', function(done) {
      cp.execFile('./cal.js', ['2','2017'], function(err,stdout_app){
        cp.exec('cal 2 2017', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
      // 2 2015
    });

  });

  describe('4 week month', function() {

    var cp = require('child_process');

    it('should return a calendar with 4 weeks and handle it well', function(done) {
      cp.execFile('./cal.js', ['2','2015'], function(err,stdout_app){
        cp.exec('cal 2 2015', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
      // 2 2015
    });

  });

  describe('6 week month', function() {

    var cp = require('child_process');

    it('should return a calendar with 6 weeks and handle it well', function(done) {
      cp.execFile('./cal.js', ['5','2015'], function(err,stdout_app){
        cp.exec('cal 5 2015', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
      // 5 2015
    });

  });

  describe('no arguments', function() {

    var cp = require('child_process');

    it('should return this month\'s calendar when no arguments are passed', function(done) {
      cp.execFile('./cal.js', function(err,stdout_app){
        cp.exec('cal', function(err,stdout_cal){
          stdout_app.should.equal(stdout_cal);
          done();
        });
      });
    });

  });

  describe('bad arguments', function() {

    var cp = require('child_process');

    it('should return an error message if an invalid year is passed to it', function(done) {
      // 9 1752
      cp.execFile('./cal.js', ['1752'], function(err,stdout_app){
        var err_msg = 'cal: year 1752 not in range 1753..9999\n';
        stdout_app.should.equal(err_msg);
        done();
      });
    });

    it('should return a usage message if an invalid flag is passed', function(done) {
      cp.execFile('./cal.js', ['h'], function(err,stdout_app){
        var err_msg = 'cal: year 0 not in range 1753..9999\n';
        stdout_app.should.equal(err_msg);
        done();
      });
    });

    it('should return an error message if an invalid year is passed with a month to it', function(done) {
      cp.execFile('./cal.js', ['12','1752'], function(err,stdout_app){
        var err_msg = 'cal: year 1752 not in range 1753..9999\n';
        stdout_app.should.equal(err_msg);
        done();
      });
      // 13 2015
    });

    it('should return an error message if an invalid month is passed to it', function(done) {
      cp.execFile('./cal.js', ['13','2015'], function(err,stdout_app){
        var err_msg = 'cal: 13 is neither a month number (1..12) nor a name\n';
        stdout_app.should.equal(err_msg);
        done();
      });
      // 13 2015
    });

  });

});
