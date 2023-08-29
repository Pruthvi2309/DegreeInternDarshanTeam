const express = require('express');
const mysql = require('mysql');

const app = express();
const port = 3000;

// Create a MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'garments'
});

// Connect to the MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to the MySQL database');
});

// Define a route for inserting data
app.post('/shirts', (req, res) => {
  const data = {
    name: 'darshan', 
    age: 30
  };

  // Insert data into the 'users' table
  db.query('INSERT INTO shirts SET ?', data, (err, result) => {
    if (err) {
      console.error('Error inserting data:', err);
      return res.status(500).json({ error: 'An error occurred while inserting data' });
    }
    console.log('Data inserted successfully');
    return res.json({ message: 'Data inserted successfully' });
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
