//importing express package
const express = require('express');

//importing path module
const path = require('path');

//creating express server instance
const server = express();

//middleware for serving static files

server.use(express.static(path.join(__dirname, 'public')))


//starting express server
server.listen(3000, () => console.log("server is ready"));