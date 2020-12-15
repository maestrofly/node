const express = require ('express');

const handleAllRequests = (requestObject, responseObject) => {
    console.log('Hi, I just received a request');
    const url = requestObject.url;
    responseObject.setHeader("content-type", "text/html");
    
    responseObject.write("<h1>Page not found</h1>");
    

    responseObject.end();
}

const handleHomeRequest = (req, res) => {
    res.send("<h1>Welcome to my homepage</h1>");
}

const handleLoginRequest = (req, res) => {
    res.send("<h2>Welcome to login page</h2>");
}

const handleSignupRequest = (req, res) => {
    res.send("<h2>Welcome to signup page</h2>");
}

const handleProfileRequest = (req, res) => {
    res.send("<h2>Welcome to the profile page</h2>");
}

const server = express();
server.use('/', handleHomeRequest);
server.use('/profile', handleProfileRequest);
server.use('/login', handleLoginRequest);
server.use('/signup', handleSignupRequest);


server.use(handleAllRequests);

server.listen(3000, '127.0.0.1', ()=> console.log('server is ready to accept request') );   