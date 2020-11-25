const http = require ('http');

const handleAllRequests = () => {
    console.log('Hi, I just received a request')
}

const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1',()=> console.log('server is ready to accept request') );