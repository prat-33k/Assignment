import mysql from "mysql2"
import dotenv from 'dotenv';

export const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password: "Bitswi-fi7",
  database:"blog"
})

db.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database');
});

export default db;