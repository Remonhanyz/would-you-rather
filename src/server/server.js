const express = require('express');  //import express
const app = express();  //initiate express
const PORT = 5000; //checks if the server device we are using runs on a specific port
 
// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {
  
})

app.listen(PORT, console.log('server started')); //listen on a port