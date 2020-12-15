const express = require ('express');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just received a request');
    const url = requestObject.url;
    responseObject.setHeader("content-type", "text/html");
    if(url === '/'){
        responseObject.write("<h1>Welcome to my homepage</h1>");
    }else if(url === '/login'){
        responseObject.write("<h2>Welcome to login page</h2>");
    }else if(url === '/signup'){
        responseObject.write("<h2>Welcome to signup page</h2>");
    }else{
        responseObject.write("<h1>Page not found</h1>");
    }

    responseObject.end();
}

const server = express();

server.use(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=> console.log('server is ready to accept request') );   