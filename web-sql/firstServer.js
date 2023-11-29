const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hola Mundo!');
  });

const server = app.listen(7000, () => {
    console.log(`Express service (firstServer.js) listening on PORT ${server.address().port}`);
    
  });