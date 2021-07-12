const path = require('path');
const express = require('express');
const apiRouter = require('./routes/api');
// const userController = require('./userController.js');

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const PORT = 3000;

app.use(express.static(path.resolve(__dirname, '../src')));

app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}...`);
});

module.exports = app;
