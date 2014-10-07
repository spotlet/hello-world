
var http = require('http');
var fs = require('fs');
var server = http.createServer(onrequest);
var PORT = process.env.SPOTLET_HTTP_PORT;
function onrequest (req, res) {
  if ('/' == req.url) {
    fs.createReadStream('./index.html').pipe(res);
  }
}

// init
if (!PORT) { process.exit(1); }
else { server.listen(PORT); }

