const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'gff_attendance',
  password: 'helmy',
  port: 5432,
});

function connectDatabase() {
  pool.connect((err) => {
    if (err) {
      console.error('Koneksi database gagal:', err);
    } else {
      console.log('Terhubung ke database PostgreSQL');
    }
  });
}

module.exports = { connectDatabase, pool };