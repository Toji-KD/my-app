const express = require('express');
const { Pool } = require('pg');
 
const app = express();
const pool = new Pool({ connectionString: process.env.DATABASE_URL });
 
app.get('/', async (req, res) => {
  const result = await pool.query('SELECT NOW()');
  res.send(`Database time: ${result.rows[0].now}`);
});
 
app.listen(3000, () => console.log('Server running on port 3000'));
