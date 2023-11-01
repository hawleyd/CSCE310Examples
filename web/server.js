/*
This is a first Node.js webpage
Recommended installations and dependencies
Instructions for each step are on the Canvas course website

-Install Ubuntu on Google Cloud
-Install Node.js and npm
-Create a working directory inside your home directory
-Install Express web framework inside the working directory
-Add this file to the working directory named server.js
-run "node server.js"
-open a web browser and point it to "http://localhost:7000"
-you should see the "Hola Mundo" text in the browser
*/

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
  });

const server = app.listen(80, () => {
    console.log(`Express running ? PORT ${server.address().port}`);
  });