const http = require('http');
const server =  http.createServer();
const app = require('./server');

server.listen(3000,console.log('app is running'));