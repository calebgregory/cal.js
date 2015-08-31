//                        TRANSFORMATION MAP
//
//   url route     =>   object                  =>   executable command
//
//   /cal/2015/1   =>   {year: 2015,month: 1}   =>   ./app.js 1 2015
//   /cal/1/2015   =>   {year: 2015,month: 1}   =>   ./app.js 1 2015
//   /cal/2015     =>   {year: 2015}            =>   ./app.js 2015
//   /cal          =>   {}                      =>   ./app.js

module.exports = function(route) {             // e.g., route = '/cal/1/2015'
  var cmd;
  route = route.split('/').slice(1);           // /cal/1/2015 => ['cal','1','2015']

  if (route[0] === 'cal') {
    cmd = './cal.js';
    route = route.slice(1);                    // route = ['1','2015']
  }

  var json = route.reduce(function(obj,arg) {
    if(isNaN(+arg)) cmd = null;                // return null if any input argument is NaN
    else if(arg<13) obj.month = arg;           // iteration 1 => { month : 1 }
    else obj.year = arg;                       // iteration 2 => { month : 1 , year : 2015 }
    return obj;
  },{});

  cmd += json.month ? ' ' + json.month : '';   // ./app.js 1
  cmd += json.year ? ' ' + json.year : '';     // ./app.js 1 2015

  return cmd.slice(0,4) === 'null' ? null : cmd;
}
