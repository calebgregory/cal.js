var cp = require('child_process');
var http = require('http');
var path = require('path');

var parse = require(path.join(process.cwd(),'/lib/calURLParse'));

module.exports = function(port) {
  var server = http.createServer(function(req,res) {

    var cmd;

    if (req.method === 'GET' && req.url.slice(0,4) === '/cal') {

      res.writeHeader(200, {
        'Content-Type' : 'text/plain',
        'Access-Control-Allow-Origin' : '*'
      });

      cmd = parse(req.url);

      var Readable = require('stream').Readable;
      var rs = new Readable;

      if (cmd) {
        rs.push(cp.execSync(cmd));
      } else {                       // cmd = null
        rs.push('try again');
      }

      rs.push(null);
      rs.pipe(res);

      setTimeout(function() {
        res.end();
      }, 500);

    }

  });
  server.listen(port);
};
