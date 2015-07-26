var should = require('chai').should();
var assert = require('chai').assert;
var path = require('path');

describe.only('Year', function() {

  describe('#monthLine()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should print three columns of months, offset proportionally to each month', function() {
      var output1 = '      January               February               March\n';
      yr.monthLine(1).should.equal(output1);
      var output2 = '       April                  May                   June\n';
      yr.monthLine(4).should.equal(output2);
      var output3 = '        July                 August              September\n';
      yr.monthLine(7).should.equal(output3);
      var output4 = '      October               November              December\n';
      yr.monthLine(10).should.equal(output4);
    });

  });

  describe('#monthRow()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should list three months in a row', function() {
      var row = [
        '      January               February               March',
        'Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa  Su Mo Tu We Th Fr Sa',
        '             1  2  3   1  2  3  4  5  6  7   1  2  3  4  5  6  7',
        ' 4  5  6  7  8  9 10   8  9 10 11 12 13 14   8  9 10 11 12 13 14',
        '11 12 13 14 15 16 17  15 16 17 18 19 20 21  15 16 17 18 19 20 21',
        '18 19 20 21 22 23 24  22 23 24 25 26 27 28  22 23 24 25 26 27 28',
        '25 26 27 28 29 30 31                        29 30 31',
        '                                            '
      ].join('\n');
      yr.monthRow(1,2015).should.equal(row);
    });

  });

  describe('#rowCombiner()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should combine the respective rows of 3 months into 1 row', function() {
      var row = '             1  2  3   1  2  3  4  5  6  7   1  2  3  4  5  6  7';
      yr.rowCombiner(1,2015,3).should.equal(row);
    });

  });

  describe('#splitByRow()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should split the output of a given month by each row', function() {
      var july = [
        '     July 2015',
        'Su Mo Tu We Th Fr Sa',
        '          1  2  3  4',
        ' 5  6  7  8  9 10 11',
        '12 13 14 15 16 17 18',
        '19 20 21 22 23 24 25',
        '26 27 28 29 30 31',
        ''
      ];
      yr.splitByRow(7,2015).should.eql(july);

    });

  });

  describe('#title()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should return the year, offset by 34 spaces', function() {
      var output = '                             2015\n\n';
      yr.title(2015).should.equal(output);
    });

  });

  describe('#trailingSpace()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should put out the trailing space for a month if its column index < 3', function() {
      var input = '31';
      yr.trailingSpace(input,2).should.equal('                  ');
    });

    it('should put out a newline character if the column index is 3', function() {
      var input = '31';
      yr.trailingSpace(input,3).should.equal('\n');
    });
  });

  describe('#wkdys()', function() {

    var yr = require(path.join(process.cwd(),'/lib/cal.year'));

    it('should print a list of week day names, three columns', function() {
      var weekdays = 'Su Mo Tu We Th Fr Sa'
      weekdays = weekdays + '  ' + weekdays + '  ' + weekdays + '\n';
      yr.wkdys().should.equal(weekdays);
    });
  });

});
