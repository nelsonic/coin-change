var port = process.env.PORT || 3000;
var http = require('http');
var url  = require('url');
var qs   = require('querystring');
var c    = require('./index');
var tooLong = Number.MAX_SAFE_INTEGER; // JS can't handle big numbers.

http.createServer(function (req, res) {
  var q = qs.parse(url.parse(req.url).query);

  if(!q.total || !q.paid) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('please provide a total and amount paid values');
  }

  var total = parseInt(q.total, 10);
  var paid  = parseInt(q.paid, 10);

  if(total === 0 || paid === 0) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('please provide a total and amount paid values');
  }

  if(total > tooLong || paid > tooLong) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('total/paid are too big. please try again');
  }

  c.getChange(total, paid, function(err, change) {
    if(err){
      res.writeHead(400, {'Content-Type': 'text/plain'});
      res.end(err);
    }
    res.writeHead(200, {'Content-Type': 'text/json'});
    res.end(change.join(','));
  });

}).listen(port);

console.log('http://localhost:'+port);
