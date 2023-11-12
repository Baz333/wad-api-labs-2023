import http from 'http';
import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT;
const server = http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello World!');
});

server.listen(port);

console.log(`Server running at ${port}`);