var http = require('http');
var os = require('os');
var handleRequest = function(request, response) {
  var g = process.env.REDIS_HOST || "No Env Found"
  response.writeHead(200);
  response.end("Hello from Gayatri from(" + g + "): " + os.hostname() + "!\n");
}
var www = http.createServer(handleRequest);
console.log("Listening on port 8080\n");
www.listen(8080);
