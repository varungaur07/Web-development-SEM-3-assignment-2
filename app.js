const express = require('express');
const app = express();
const logger = require('./middleware/logger');
const studentRoutes = require('./routes/studentRoutes');

app.use(express.json());
app.use(logger);

app.use('/students', studentRoutes);

app.get('/', (req, res) => {
  res.send('Student API is running...');
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});