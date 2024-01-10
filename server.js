const express = require('express');
const app = express();
 
app.get('/', (req, res) => {
  res.send("Savanna Boston");
});

 
app.get('/doggie', (req, res) => {
  res.send("Peaches");
});

const port = 3000;
 
app.listen(process.env.PORT || port);
console.log('Web Server is listening at port ' + (process.env.PORT || port));