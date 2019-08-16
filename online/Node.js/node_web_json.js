const http = require('http');
console.log('open the browser at localhost:\8080');

const requestHandler = (request, response) => {
   response.writeHead(200, {'Content-Type': 'application/json'});
   const json = JSON.stringify({num : 12 , text : 'hello'});
   response.write(json);
   response.end();
}

http.createServer(requestHandler).listen(8080);

