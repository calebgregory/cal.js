#!/usr/bin/env node

var path = require('path');
var yr = require(path.join(process.cwd(),'/lib/cal.year'));
var month = require(path.join(process.cwd(),'/lib/cal.month'));
var errorMsg = require(path.join(process.cwd(),'/lib/errorMsg'));
var usageMsg = require(path.join(process.cwd(),'/lib/usageMsg'));
var Readable = require('stream').Readable;
var argv = require('minimist')(process.argv.slice(2));
var dates = argv._;

//if(Object.keys(argv).length > 1) {
//
//  var f = Object.keys(argv)[1];
//  process.stdout.write(usageMsg(f));
//  process.exit(1);
//
//}

var rs = new Readable;

if(argv.serve) {

  var port = Math.floor(Math.random()*4999 + 5000);
  require(path.join(process.cwd(),'/lib/serve'))(port);

  var msg = ['\n',
    '!######################################################!\n',
    '!#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#!\n',
    '!#@                                                  @#!\n',
    '!#@     server running on http://localhost:'+port+'      @#!\n',
    '!#@                                                  @#!\n',
    '!#@     to view the calendar for a given month       @#!\n',
    '!#@     or year, open this link in your browser      @#!\n',
    '!#@     and enter, for example,                      @#!\n',
    '!#@                                                  @#!\n',
    '!#@       http://localhost:'+port+'/cal/12/2000,         @#!\n',
    '!#@       http://localhost:'+port+'/cal/2000/12,         @#!\n',
    '!#@       http://localhost:'+port+'/cal/2000,   or       @#!\n',
    '!#@       http://localhost:'+port+'/cal                  @#!\n',
    '!#@                                                  @#!\n',
    '!#@     ...have fun!                                 @#!\n',
    '!#@                                                  @#!\n',
    '!#@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@#!\n',
    '!######################################################!\n'
  ].join('');
  console.log(msg);

} else if(!dates.length) {              // no arguments passed

  var today = require(path.join(process.cwd(),'/lib/cal.today'));
  var m = today.month,
      y = today.year;
  rs.push(month.display(m,y));

} else if(dates.length === 1) {         // just a year is passed

  var y = dates[0];

  if(typeof y !== 'number') {           // is this arg not a number?
    rs.push(errorMsg(0));
  } else if(y > 1752 && y < 10000) {    // is this year in a range we can work with?
    rs.push(yr.display(y));
  } else {                              // it is a number but not in our range
    rs.push(errorMsg(y));
  }

} else if(dates.length === 2) {         // a year and a month are passed

  var m = dates[0];
  var y = dates[1];

  if(m > 0 && m < 13) {                 // is the month valid?
    if(typeof y !== 'number') {
      rs.push(errorMsg(0));
    } else if(y > 1752 && y < 10000) {  // is the year valid?
      rs.push(month.display(m,y));
    } else {                            // the year's not in our range
      rs.push(errorMsg(y));
    }
  } else {                              // the month's not in our range
    rs.push(errorMsg(y,m));
  }

} else {                                // too many arguments

  rs.push(usageMsg());

}
rs.push(null);

rs.pipe(process.stdout);
