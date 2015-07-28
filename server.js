#!/usr/bin/env node

var http = require('http');
var path = require('path');
var Readable = require('stream').Readable;

var errorMsg = require(path.join(process.cwd(),'/lib/errorMsg'));
var month = require(path.join(process.cwd(),'/lib/cal.month'));
var usageMsg = require(path.join(process.cwd(),'/lib/usageMsg'));
var yr = require(path.join(process.cwd(),'/lib/cal.year'));


http.createServer(function(req,res) {
  var rs = new Readable;
  var dates;

  if(req.method === 'GET') {
    var dates = req.url.split('/');
    res.writeHeader(200, {
      'Content-Type' : 'text/plain',
      'Access-Control-Allow-Origin' : '*'
    });
  }

  if(dates[3]) {                // a year and a month are passed

    var m = parseInt(dates[2]);
    var y = parseInt(dates[3]);

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

  } else if(dates[2]) {         // just a year is passed

    var y = parseInt(dates[2]);

    if(typeof y !== 'number') {           // is this arg not a number?
      rs.push(errorMsg(0));
    } else if(y > 1752 && y < 10000) {    // is this year in a range we can work with?
      rs.push(yr.display(y));
    } else {                              // it is a number but not in our range
      rs.push(errorMsg(y));
    }

  } else if(dates[1]) { // no arguments passed

    var today = require(path.join(process.cwd(),'/lib/cal.today'));
    var m = today.month,
        y = today.year;
    rs.push(month.display(m,y));

  } else {                                // too many arguments

    rs.push(usageMsg());

  }
  rs.push(null);

  rs.pipe(res)

  setTimeout(function() {
    res.end();
  },500);

}).listen(1337);

var msg = [
  '###########################################',
  '# server running on http://localhost:1337 #',
  '###########################################'
].join('\n');
console.log(msg);
