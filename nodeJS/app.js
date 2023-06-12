const http = require('http');

const server = http.createServer((request, response) => {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    });
    request.on('end', () => {
        body = Buffer.concat(body).toString();
        let userName = 'Unknow User';
        
        if (body) {
            userName = body.split('=')[1];
        }

        response.setHeader('Content-Type', 'text/html');
        response.write('<h1>Just a Form</h1>');
        response.write('<form method="POST" action="/"><input name="username" type="text"><button type="submit">Send</button></form>');
        response.write(`<h1>Hi ${userName}</h1>`);
        response.end();

        console.log(body);
    });
    
    
});

server.listen(3000);