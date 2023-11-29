//  requires "npm install mysql" from this local folder
//places mysql dependencies in the node_modules folder


var mysql = require('mysql');

var con = mysql.createConnection({
  host: "35.188.33.224",        //replace the ip address with the address of your MySQL instance
  user: "bankInfo",             //make sure to create this user
  password: "bankInfo",
  database: "bankInfo"          //make user that the database exists and was imported from the sql file previously
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM accounts", function (err, result, fields) {        //make sure the accounts table exists
      if (err) throw err;
      console.log(result);
    });

con.end((err) => {
    if (err) {
        console.error('Error closing MySQL connection:', error);
        return;
    }

    console.log('MySQL connection closed.');
    });
  });
