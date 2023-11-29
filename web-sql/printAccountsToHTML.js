//  requires "npm install mysql" from this local folder
//  requires "npm install express" from this local folder
//places mysql dependencies in the node_modules folder


const mysql = require('mysql');
const express = require('express');
const http = require ('http');
const app = express();
const server = http.createServer(app);
const port = 8081;
var result2;



main().catch(err => console.log(err));

async function main()   {

  var con = mysql.createConnection({
    host: "35.188.33.224",
    user: "bankInfo",
    password: "bankInfo",
    database: "bankInfo"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM accounts", function (err, result, fields) {
      if (err) throw err;
      result2 = result;
      //console.log(result);
    });
  
  con.end((err) => {
    if (err) {
        console.error('Error closing MySQL connection:', error);
        return;
    }
  
    //console.log('MySQL connection closed.');
    });
  });
    app.get("/", function(req, res) { 
      res.send(result2); 
    });
    
    server.listen(port);
    console.debug('Server listening on port ' + port);


}
