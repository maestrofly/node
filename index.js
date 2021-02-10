const express = require ('express');

const server = express();
const handleAllRequests = (req, res) =>{
    res.send("RESPONSE FROM SERVER.USE");
}


const handleHomeRequest = (req, res) => {
    res.send("<h1>Welcome to my homepage</h1>");
}

const handleLoginGetRequest = (req, res) => {
    res.send('Welcome to login page');
}

const handleSignupRequest = (req, res) => {
    res.send("<h2>Welcome to signup page</h2>");
}

const handleProfileRequest = (req, res) => {
    res.send("<h2>Welcome to the profile page</h2>");
}

const handleProfilePutRequestType = (req, res)=> {
    res.send('RESPONDED TO PROFILE REQUEST WITH METHOD OF VALUE PUT');
}

const middlewarefunction = (req, res, next) =>{
    // console.log('req');
    //make some checks

    next();
   
}

const loginRouteSpecificMiddleware = (req, res, next) => {
    console.log('login route middleware executed');
    next();
}
//middlewares
// server.use(middlewarefunction);


//routes
server.post('/profile', handleAllRequests);
server.get('/login', loginRouteSpecificMiddleware, handleLoginGetRequest);

server.put('/profile', handleProfilePutRequestType );
server.get('/signup', (req, res)=> res.send('FROM SIGNUP FOR GET METHOD'));
server.post('/signup', (req, res)=> res.send('FROM SIGNUP FOR POST METHOD'));
server.get('/', (req, res)=> res.send('FROM SIGNUP FOR GET METHOD'));


server.listen(3000,() => console.log('MAESTROFLYS SERVER IS READY'));

// server.listen(3000, '127.0.0.1', ()=> console.log('MAESTROFLYS SERVER IS READY') );        












// const handleAllRequests = (requestObject, responseObject) => {
//     console.log('Hi, I just received a request');
//     const url = requestObject.url;
//     responseObject.setHeader("content-type", "text/html");
    
//     responseObject.write("<h1>Page not found</h1>");
    

//     responseObject.end();
// }



// const server = express();

// const middlewarefunction = (req, res, next) => {
//     console.log('hello this is the middleware');
//     //make some checks
//      res.send(req);
//          next();
   
// }



// server.use(middlewarefunction);

//routes 
// server.use('/profile', handleProfileRequest);

// server.use('/signup', handleSignupRequest);  
// server.use('/', handleHomeRequest);


// server.use(handleAllRequests);