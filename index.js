const http = require ('http');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just received a request');
    
    const url = responseObject.url;
    if(url === '/'){
        responseObject.write("<h1>Welcome  to the home page</h1>");
    }else if(url === '/login'){
        responseObject.write("<h2>Welcome to Login page</h2>");
    }else if(url === '/signup'){
        responseObject.write("<h2>Welcometo the sign up page</h2>");
    }else{
        responseObject.write("<h1>Page is found</h1>");
    }
    responseObject.end();
}

const server = http.createServer(handleAllRequests);

server.listen(3000, '127.0.0.1',()=> console.log('server is ready to accept request') );   