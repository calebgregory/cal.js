var cp = require('child_process');

describe('CLI', function() {

  describe('Leapyear February', function() {

    it('should handle leapyears', function() { // 2 2012

      testCal('2 2012');

    });

    it('should handle nonleapyears', function() { // 2 2014

      testCal('2 2014');

    });

  });

  describe('Month Lengths', function() {

    it('should handle a 4 week month', function() { // 2 2015

      testCal('2 2015');

    });

    it('should handle a 5 week month', function() { // 1 2015

      testCal('1 2015');

    });

    it('should handle a 6 week month', function() { // 5 2015

      testCal('5 2015');

    });

  });

  describe('Year', function() {

    it('should handle printing a full year', function() { // 2015

      testCal('2015');

    });

  });

  describe('Current Month', function() {

    it('should handle no argument', function() { // current

      testCal();

    });

  });

  describe('Usage', function() {

    describe('bad arguments', function() {

      it('should print an err message for bad month', function() { // 1752 // 10000 // 13 // asdf

        testCal('13 2015');

      });

      it('should print an err message for bad year', function() {

        testCal('10000');

      });

      it('should print usage help for bad argument', function() {

        testCal('asf');

      });

    });

  });

});

function testCal(arg) {

  var sep = arg ? ' ' : '';
  arg = arg || '';

  var output = cp.execSync('./app.js' + sep + arg).toString();
  var goal = cp.execSync('cal' + sep + arg).toString();
  output.should.equal(goal);

  // an asynchronous approach
  //cp.exec('./app.js' + sep + arg, function(err, output) {
  //  cp.exec(cmd, function(err, goalOutput) {
  //    output.should.equal(goalOutput);
  //    done();
  //  });
  //});

}
