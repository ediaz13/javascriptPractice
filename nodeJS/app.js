const http = require('http');

const server = http.createServer((request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write('<h1>Just a Form</h1>');
    response.write('<form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>');
    response.end();
});

server.listen(3000);