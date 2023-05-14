//variables
const express = require('express');
const path = require('path');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const app = express();

//middleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(require('./config/checkToken'));

//routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/gigs', require('./routes/api/gigs'));
app.use('/api/reviews', require('./routes/api/reviews'));
app.use('/api/skills', require('./routes/api/skills'));


const ensureLoggedIn = require('./config/ensureLoggedIn');

// Error handler to check if route exists
app.use(function (req, res) {
  console.log(`route: ${req.path} does not exist`);
  res.status(404, "route does not exist");
});
//catch all
app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

//listener
const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log(`Express app running on port ${port}`)
});