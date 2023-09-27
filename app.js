const express = require('express');
const bodyParser = require('body-parser');
const { setupRoutes } = require('./routes/auth');
const { setupAttendanceRoutes } = require('./routes/attendance');
const { connectDatabase } = require('./db');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// koneksi database
connectDatabase();

// Setup routes
setupRoutes(app);
setupAttendanceRoutes(app);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
