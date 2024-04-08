const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

connection.connect();

app.get('/', (req, res) => {
  const name = 'Full Cycle Rocks!';
  connection.query('INSERT INTO people (name) VALUES (?)', [name], (error, results) => {
    if (error) throw error;
    connection.query('SELECT id, name FROM people', (error, results) => {
      if (error) throw error;
      res.send(`<h1>${name}</h1><ul>${results.map(row => `<li>${row.id} - ${row.name}</li>`).join('')}</ul>`);
    });
  });
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});