var http = require('http');
console.log('open the browser at localhost:\8080')

const requestHandler= (request, response) => {
   response.writeHead(200, {'Content-Type': 'text/html'});
   response.write('<h1 style="color:red;">Hello Node.js!</h1>');
   response.end();
}
http.createServer(requestHandler).listen(8080);
