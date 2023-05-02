const express = require('express');
const mysql = require('mysql');

// create a MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '6wwmcrNYfdz!',
  database: 'eiannucci'
});

// connect to the MySQL server
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL server: ' + err.stack);
    return;
  }

  console.log('Connected to MySQL server as id ' + connection.threadId);
});

// create a new Express app
const app = express();

// serve your React project
app.use(express.static('../build'));

// start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
