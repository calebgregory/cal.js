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

if(!dates.length) {

  rs.push(month.display(7,2015));
  rs.push(null);

} else if(dates.length === 1) {

  var y = dates[0];

  if(typeof parseInt(y) !== 'number') {
    rs.push(usageMsg(y));
  }

  if(y > 1752 && y < 10000) {
    rs.push(yr.display(y));
  } else {
    rs.push(errorMsg(y));
  }
  rs.push(null);

} else if(dates.length === 2) {

  var m = dates[0];
  var y = dates[1];

  if(m > 0 && m < 13) {
    if(y > 1752 && y < 10000) {
      rs.push(month.display(m,y));
    } else {
      rs.push(errorMsg(y));
    }
  } else {
      rs.push(errorMsg(y,m));
  }
  rs.push(null);

}

rs.pipe(process.stdout);
