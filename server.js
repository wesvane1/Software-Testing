const express = require('express');
const app = express();
const lesson1Controller = require('./cotrollers/lesson1')
 
app.get('/', lesson1Controller.savannaRoute);
app.get('/doggie', lesson1Controller.peachesRoute);

const port = 3000;
 
app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));